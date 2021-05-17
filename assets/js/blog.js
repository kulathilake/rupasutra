var BloggerClient = function({id,key}) {
    this.id = id;
    this.key = key;
    this.api = `https://www.googleapis.com/blogger/v3/blogs/${this.id}`
    this.pageToken = null;
    this.postList = []
} 

BloggerClient.prototype.fetchPosts = function() {
    return fetch(`${this.api}/posts?key=${this.key}
    ${this.pageToken?`&pageToken=${
        this.pageToken
    }`:''}`)
    .then(res=>res.json())
    .then(res=>{
        if(res.nextPageToken) this.pageToken = res.nextPageToken;
        return this.postList = this.postList.concat(res.items);
    })
    .catch(console.error);
}

BloggerClient.prototype.getFeaturedArticle = function(callback) {
    if(this.postList.length) return new Promise(res=>res(this.postList.length[0]));
    return this.fetchPosts()
    .then(res=>{
        if(res.length){
            if(callback) callback(res[0]);
            return res[0];
        }else {
            if(callback) callback(null);
            return null
        };
    })
    .catch(console.error);
}

BloggerClient.prototype.renderFeaturedArticle = function(
   { 
        header,
        author,
        excerpt,
        image,
    },
    excerptLength = 300
    ) {
        this.getFeaturedArticle()
        .then(res => {

            if(header instanceof HTMLElement && author instanceof HTMLElement && excerpt instanceof HTMLElement){
                header.innerText = res.title;
                author.innerText = `${res.published} by ${res.author.displayName}`;
                excerpt.innerHTML = String(res.content).slice(0,excerptLength) + ` ... <a href="${res.url}">Read More</a>`;
            }

            if(image instanceof HTMLImageElement) {
                var parser = new DOMParser();
                var dom = parser.parseFromString(res.content,'text/html');
                var imgs = dom?dom.getElementsByTagName('img'):null;
                var img = imgs&&imgs.length?imgs[0]:null;
                image.src = img.src;
            }
        })
        
    
}