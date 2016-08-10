var http=require('http');  var querystring=require('querystring');  var util=require('util');
http.createServer(function(req, res) {
    console.log(req);

    var post='';
    req.on('data',function(chunk){
        console.log("chunk",chunk.toString());
        post+=chunk;
    })
    req.on("aa",function(){

    });
    req.on('end',function(){
        post=querystring.parse(post);
        console.log('first, finish parse'+post.age);
        res.end(post.name);
    })
}).listen(8080);
var contents=querystring.stringify({
    name:'bobo',
    age:21,
    address:'harbin'
});
console.log("contents",contents);
console.log(contents.length)
var options={
    host:'localhost',
    path:'/',
    port:8080,
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencode',
        'Content-Length':contents.length
    }
};    
var req = http.request(options,function(res){
    res.setEncoding('utf-8');
    res.on('data',function(data){
        console.log('the returned data'+data);
        console.log(data);
    })
});


req.write(contents);//send a chunk
req.end();//Finishes sending the request




















