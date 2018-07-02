let request = require("request");
const log = require('bunyan').createLogger({name: "http-client"});

let get = (URL) => {
    request.get(URL, (error, response, body) => {
        if(error) {
            log.error('[GET ' + URL + '] [ERROR ' + error + ']');
        }
        log.info('[GET ' + URL + '] [StatusCode ' + response.statusCode + ']');
    });
}

let post = (URL, body) => {
    request.post({
        "headers": { "content-type": "application/json" },
        "url": URL,
        "body": JSON.stringify(body)
    }, (error, response, body) => {
        if(error) {
            log.error('[POST ' + URL + '] [ERROR ' + error + ']');
        }
        log.info('[POST ' + URL + '] [StatusCode ' + response.statusCode + ']');
    });
}

/*
request with events

function get(URL) {
    let response = request.get(URL);
    response.on('data', function(data){
        
    });
    response.on('end', function(data){
        
    });
    response.on('body', function(body){
        
    });
    response.on('response', function(response){
        
    });
    response.on('error', function(data){
        
    });
}
*/

module.exports.get = get;
module.exports.post = post;