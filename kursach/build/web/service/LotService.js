class LotService{
    getAllLot() {
        
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
        if (request.status !== 200) 
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
    var request = new XMLHttpRequest();
    request.open('POST', '/kursach/json',true);
    request.setRequestHeader("Content-type", "application/json, charset=UTF-8");                    
    request.send(json);
    if (request.readyState != 4) 
        return;
    alert(request.statusText);
    if(request.status == 200) {
        alert ("Lot is added");
    }

}
}







