var path = require('path');
var express = require('express');
var hbs = require('hbs')
 var forcast = require('../public/util/forcast')
 var geocoding = require('../public/util/geocoding')

var publicDirectryPath = path.join(__dirname, '../public');
var paritialDirectryPath = path.join(__dirname, '../templet/partial')
console.log(paritialDirectryPath)


console.log(publicDirectryPath)

    var app = express();
    


    app.use( express.static(publicDirectryPath))


    app.set('view engine', 'hbs');
    
    app.set('views', path.join(__dirname, '../templet/views'));

     hbs.registerPartials(paritialDirectryPath);


     hbs.registerHelper('myDate', ()=>{
        return new Date().getFullYear();
     });

    app.get('',(req,res)=>{
        res.render('index',{title:'Weather', name: 'Dawit Ayele', pageTitle:'Home'})
    })
    app.get('/weather',(req,res)=>{
        if(!req.query.city){
           return res.send('Invalid input')
        }
        geocoding(req.query.city,(error, data)=>{
            if(error){
              return  res.send({error})
            }
         
            forcast(data.latitude,data.longtude,(error,forcastData)=>{
                if(error){
                    return res.send({error})
                }
                res.send({
                    forcast:forcastData.forcast,
                    location: data.location,
                    city: req.query.city
                })
               
            })

        })

      
    })
    app.get('/about',(req,res)=>{
        res.render('about.hbs',{name: 'Dawit Ayele',title:'About',
    pageTitle:'About'})
    })

    app.get('/help',(req,res)=>{
        res.render('help',{title:'Help'})
    })

    
    app.get('/help/*',(req,res)=>{
        res.render('404',{title:'404 Errror', message:'There is no help page'})
    })
    app.get('*',(req,res)=>{
        res.render('404',{title:'404 Errror', message:'This is is 404 page'});
    })
    
   /*  app.get('',(req,res)=>{
        res.send('Hello this is the home page')
    })

    app.get('/about',(req,res)=>{
        res.send('This is the about page')
    })
    app.get('/help',(req,res)=>{
        res.send('This is the help page')
    })
    app.get('*',(req,res)=>{
        res.send('Page cannot be reached 404')
    })
 */

    app.listen(3000,()=>{
        console.log("The app is running on port 3000")
    })