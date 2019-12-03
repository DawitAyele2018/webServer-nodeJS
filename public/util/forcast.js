var request = require('request');

        function forcast(longtude,latitude,callback){
                        var url = 'https://api.darksky.net/forecast/eff040e47c01f33c01230f4fc9f5cce2/'+longtude+','+latitude
                    request({url,json:true}, (error, {body}) =>{
                        if(error){
                          callback( {error:'undable to load the page'},undefined)
                        }else{
                            if(body.error){
                             callback( {error:'invalid Input'}, undefined)
                            }
                            else {
                              callback(undefined,{
                                  forcast: `The Tempratur is ${body.currently.temperature} and humidity ${body.currently.humidity }`,
                             
                              }) 
                            }
                        }

                    
                    });
        }

  

module.exports=forcast
/* 


38.73694 and  9.02722
forcast(37.8267,-122.4233,(error,response)=>{
    console.log("error: "+ error )
    console.log('data: '+response.tempreture + " and "+ response.humidity)
})

geocoding('Los Angeles',(error, data)=>{
    console.log("error: "+ error)
    console.log("data: "+ data.latitude +' and  '+ data.longtude)
});

*/