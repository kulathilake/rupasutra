var PrismicClient = function(repo){
    this.repository = repo;
    this.version = 2;
    this.ref = null;
    this.api = "https://"+this.repository+".prismic.io/api/v"+this.version;

    this.fetchMasterRef = async function(){
        return fetch(this.api)
        .then(res=>res.json())
        .then(res=>{
            var masterRef = res.refs.find(ref => ref.isMasterRef);
            if(!!masterRef){
                this.ref = masterRef.ref
                return this.ref;
            } else {
                throw new Error("Could not Find Master Ref")
            }
        })
    };

    this.getRef = async function(){
        if(!!this.ref){
            return this.ref;
        }else {
            return await this.fetchMasterRef();
        }
    }
    
}

PrismicClient.prototype.fetchDocsByType = async function (type,limit,page){
    var ref = await this.getRef();
    if(ref){
        var query = `q=[[at(document.type,"${type}")]]`;    
        if(!!!limit || !!!page){
            limit = 8;
            page = 0;
        };
    
        var paging = `pageSize=${limit}&page=${page}`;
    
        return fetch(this.api + `/documents/search?ref=${ref}&${query}&${paging}`,{
            method: "GET",
        })
        .then(res=>res.json())
        .then(res=>{return res})
        .catch(console.error);
    }
}
