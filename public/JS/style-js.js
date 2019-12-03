console.log('hello')


 var search = document.querySelector('input')

 var messageOne = document.querySelector('#message-1')
 var messageTwo = document.querySelector('#message-2')



var weatherForm = document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    messageOne.textContent = 'Loading....'
    messageTwo.textContent = ''
    var location = search.value;
    var url = '/weather?city='+location
    fetch(url)
    .then(response=>{
        if(response.error){
            messageOne.textContent = ''
            messageTwo.textContent = response.error
        }
        else{
          return response.json().then(data=>{
           if(data.error){
            messageOne.textContent = ''
            messageTwo.textContent = data.error
          
           }
           else{
           
               messageOne.textContent = data.location;
               messageTwo.textContent = data.forcast;
           }
         })
        
        }
    })
})

