var request = require('request');

function geocoding(address, callback){
    var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZGF3aXQyMDE5IiwiYSI6ImNrM2Fxb2dnMDBmejQzaW8xMDNnd3VucmEifQ.fMOXyCkJpyMJx5FRvaxGkA'
    request({url,json:true},(error,{body}={})=>{
    if(error){
    callback("undable to load the page",undefined)
    }else{
    
        if(body.features.length===0){
      callback("invalid Input", undefined)
        }
        else {
        callback(undefined,{
            location: body.features[0].place_name,
            latitude: body.features[0].center[0],
            longtude: body.features[0].center[1]
        } ) 
        }
    
    }
    
    })
}

module.exports= geocoding


