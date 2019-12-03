 /* 

 - So far in our application we can only access our application form 
   the command line 

- The most poplar npm library, Express, makes it possible to 
  to create web server using node. This server will allow as to serve up all of the assets for our web 
  application.   
    This inludes HTML, CSS, Clint side JS that create awsome user expreise
- Express also used to serve up JSON Data that 
 
 */


 /* 
    Hello Express 

    - With express we can serve up what ever our applicaiton needs.   For our portofolio websiete
     we can create a node server that serves up all of the assets the browser would need to load.
    - Instead of serving a website we can serve an HTTP based API
     
 Express. 

 => in SRC dir we put all our node js applicaiotn
 Objective -- load in express 
           --- configure it to start the surver
           const express = require('express')    ----> Express library expose just a single funciton 
           var app =  express() --> we call it to start a new express applicaiton  
                                --->   express funciton doesnt take any argument instesad,
                                        we configure our application by using the different methods provided on the applicaiton itself  


                                        In our appliaciotn we will have 
                                        one domain app.com that run on a single express server with multiple routes app.com/help, app.com/about


To set up the server to send response when someone needs to get something at a specific route.
 - we set that app using a method get on app

  app.get() --- my we send back HTML or we may send JSON file


   app.get(route,function)  ==> The funciton is where we diescribe what we should do when someouen 
                                visites this sspesific route.

  
    funciton has to areguments req and res. both are objects\
                            req => contain informaion about the incoming request to the server

                            res => contain several methods allowing us to customize what we want to send back to the requester

   res.send('')---- allows to send to the requester 


   To start the server up 
   - we use app.listen --- it needs to listen on a specific portl

   --  app. listen (port_number, funcion)  - needs to arguments. 
                       - the port numer--  A common development port is port 3000  
                                       -- its not the difault port 
                                        - when we visit a website we dont provide the poert nunmber  because there are
                                          default ports  ---  for HTTP its port 80
                      -  funciton -  this an optional call back function which run when the server is upin running
                                  - this will not be displayed on the browser 
-- Once we run the applicaiton the surver will be up - and stay running waiting for request
-- to set app the other routes  app.get('/help', funcion )
                                                     
 */



 /*         ________________- - - - _ _ _ -- _ __ _ _ -    
            |                                         |  
            |  Serving up HTML and JSON               |
            +++++++++++++++++++++++++++++++++++++++++++


    - in each different routes we dont only send texts but also HTML disigned to be rendered to be dispalyed on the browser
    - or JSON to be used by code.

    => if we provide an object to res.send() express is going to detect we provided an object and automatically stingify our 
       object. 
       the juston could be  {   } and object or an array {[ ]}

    -  If we have a really long webpage with a lot of HTML we dont want to 
       write that inside our node server. Therefore we want to serve up the entire directory.
    - 
 
 */


 /*   
             |  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
                    Serving a static Assets// Serving the entire directory |
               +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      -- We can configure an Express to serve up an enetire directory of assets that contain HTML, CSS, clisnt side JS


      To do that - we need the path to the directory , absoute path form the route of our application 


    __dirname -- a path to the current directory 
    __filename -- a path to the current file
     both this files are provide by the wraper funciton 

    path.join -- used to manipulate the path path.join(__dirname, '../public')

    - We can serve the directory by using :
    app.use()   - is a funciton to customize ur server - we need to pass to it something else and this something 
                comes form express. express.static() -- we pass the the path to the folder we want to serve.
                
                - 

 
 */


 /* 
                -----------------------------------------------
               |    Serving up CSS, JS, Images, and More      |
               |-----------------------------------------------
      relative path --   ./css/styles.css  here ./ is my current dirctory 
      Absolute path ---   / absolute path starts with forward slash,
                          if we start with a forward slash in our machine it will take us to the root of the harddrive
                          in webdesign it goes to the webserver root. 

    
 
 */

 /* 
                                    ++++++++++++++++++++++++++++++++++++
                                    Dynamic Pages with Templets
                                    ++++++++++++++++++++++++++++++++++++

          Handlebars.
          
          +++++++++
     - To render dynamic documents as opposed to static ones 


     - To easily create codes that can be used across pages. 
                - Example: head and footer 
     - Can be used anywhere where JS is used 


     There is another handlebar library which is kind of a plug in for express which intergrate 
           handlebars to express. which is hbs -- it uses handlebar beahind the sine , it just make it easy to integrate with express.
    
           
    

 
 
 
 */