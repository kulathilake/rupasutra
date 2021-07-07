var PrismicClient = function(repo,ref){
    this.repository = repo;
    this.version = 2
    this.ref = ref;
    this.api = "https://"+this.repository+".prismic.io/api/v"+this.version
}

PrismicClient.prototype.fetchDocsByType = function (type,limit,page){
    var query = `q=[[at(document.type,"${type}")]]`;    
    if(!!!limit || !!!page){
        limit = 8;
        page = 0;
    };

    var paging = `pageSize=${limit}&page=${page}`;

    return fetch(this.api + `/documents/search?ref=${this.ref}&${query}&${paging}`,{
        method: "GET",
    })
    .then(res=>res.json())
    .then(res=>{return res})
    .catch(console.error);
}