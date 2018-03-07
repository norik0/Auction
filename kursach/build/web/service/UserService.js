  class UserService{
  getAllUser() 
  {
      
        var request = new XMLHttpRequest();
        request.open('GET', '/kursach/GetAllUsers', false);
        request.send();
        if (request.status != 200) 
        {
            alert( request.status + ': ' + request.statusText ); 
            return null;
        } 
        else 
        {
            var lot = JSON.parse(request.responseText);
            return lot;
        }
    }
    
    getUserById(id)
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/kursach/GetUserById?id=' + id, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var user= JSON.parse(request.responseText );
             return user;
         }
         return null;
    }
    insertUser(json)
    {
        var request = new XMLHttpRequest();
        request.open('GET', '/kursach/InsertUser', false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             json= JSON.parse(request.responseText );
             return json;
         }
         return null;
    }
}

