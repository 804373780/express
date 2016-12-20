var http=require("http");
var url=require("url");

class express{
    constructor(param){
        this.setArr=[];
    }
    listen(port=80){
        this.port=port;
        this.create();
    }
    set(url,callback){
        var obj={};
        obj[url]=callback;
        this.setArr.push(obj);
    }
    create(){
        var that=this;
        http.createServer(function(request,response){
            that.factory(request,response);
        }).listen(this.port);
    }
    factory(request,response){
        var pathname=url.parse(request.url).pathname;
        this.setArr.forEach(function(obj){
            if(Object.keys(obj)[0]==pathname){
                response.send=function(val){
                    response.end(val);
                }
                obj[pathname](request,response);
            }
        })
    }
}
module.exports=function(param){
    return new express(param);
}