class LotService{
    getAllLot() {
        alert ("3!");
        var request = new XMLHttpRequest();
        request.open('GET', '/kursach/GetLotAll', false);
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

    getLotById(id)     {
        var request = new XMLHttpRequest();
        request.open('GET', '/kursach/GetLotById'+'?id='+id, false);
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
getRateByIdLot(id)     {
        var request = new XMLHttpRequest();
        request.open('GET', '/kursach/getLotById'+'?id='+id, false);
        request.send();
        if (request.status != 200) 
        {
            alert( request.status + ': ' + request.statusText ); 
            return null;
        } 
        else 
        {
            var lot = JSON.parse(request.responseText);
            return lot.rate;
        }
    }
    insertLot(json)
    {
        alert("help");
         var request = new XMLHttpRequest();
         request.open('GET', '/kursach/InsertLot?json=' + json, false);
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








