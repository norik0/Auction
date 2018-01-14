class RateService
{
    
    getAllRate()
    
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/kursach/GetAllRate', false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var RateList= JSON.parse(request.responseText );
             return RateList;
         }
         return null;
   }
   
    InsertRate(json)
    
    {
        alert("help2");
         var request = new XMLHttpRequest();
         request.open('GET', '/kursach/InsertRate?json=' + json, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var count= request.responseText;
             return count;
         }
         return null;
    }  
}





