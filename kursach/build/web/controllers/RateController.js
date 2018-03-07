class RateController{
constructor(){
    this.RateService = new RateService();
    }

   
    
//    getLotById(id)     {
//        var RateService = new rateService();
//        return rateService.getLotById(id) ;
//    }
    getAllRate()
    {
        return this.RateService.getAllRate();
    }
    getLastRate()
    {
        return this.RateService.getLastRate();
    }
    
    insertRate(json)
    {
        return this.RateService.insertRate(json);
    }
                    
     getAllRateView()
    {
        alert ("RateView!");
        var data=this.getAllRate();
        var num = 0;
        
        
                  
            var result = "<div class='container content'>"+
  "<div class='heading'>"+
        "<h2 style = 'margin-left:300px;'><strong>Сделать ставку</strong></h2>"+     
    "</div>";
for(var i=0; i<data.length;i++)
        {   
            num +=1; 
            var id=data[i].id;
            var login=data[i].login;
            var price=data[i].price;
            var time=data[i].time;
          
            
           /* var date = new Date(last_time.date);           
            var options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                  };
                  
            date = date.toLocaleString("ru", options);*/
	result+= "<div class='row row-margin-bottom'>"+
            "<div style = 'margin-left:300px;' class='col-md-5 no-padding lib-item' data-category='view'>"+
                "<div class='lib-panel'>"+
                    "<div class='row box-shadow'>"+
                    "<button style= 'position:relative; left:150px; top:160px;'>Ставка</button>"+
                        "<div class='lib-row lib-desc'>"+
                                id+
                            "</div>"+
                        "<div class='col-md-6'>"+
                            "<div class='lib-row lib-header'>"+
                                login+
                                "<div class='lib-header-seperator'></div>"+
                            "</div>"+
                            "<div class='lib-row lib-desc'>"+
                                price+
                            "</div>"+
                            "<div class='lib-row lib-desc'>"+
                                time+
                            "</div>"+
                        "</div>"+
                         
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>";

        
        } 
        var element =document.getElementById("lot");
        element.innerHTML = result;
     }
    
    getLotByIView(id)    {
            var data=this.getAllLot();
            var lot =this.getLotById(id);
            var lotView=document.getElementById("lot");
            for(var i=0; i<data.length;i++)
            {
           
            var result="";
            var id=data[i].id;
            var name=data[i].name;
            var description=data[i].description;
            var last_time=data[i].last_time;
            var image=data[i].image;
        
            
  
                  

            
            result+= "<div class='row'>" +
                        "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>"+
                          "<div class='thumbnail' onclick='lotClick("+ id  +")'    >"+
                            "<img src='data:image/png;base64,"+image+"'>"+
                            "<div class='caption'>"+
                              "<h3>"+name+"</h3>" +
                              "<p>"+description+"</p>"+
                              "<p align='right'>"+last_time+"</p>"+
                            "</div></div></div></div>";
                }
        lotView.innerHTML = result;
    }
    
    getLastRateView()    {
            var data=this.getLastRate();
            var result="";
            var price=data.price;
            result+="</br><div class='row col-xs-12' >Последняя ставка: "+price+"</div>";
        var element =document.getElementById("lastRate");
        element.innerHTML = result;
    }
     InsertRate()
    {
        var price=document.getElementById("price").value;
        var login=-1;
        
        
        var data1=this.getAllUser();
        for(var i=0; i<data1.length;i++)
        {
            if (data1[i].login === user)
            {
                user_id=data1[i].id;
            }
        }
        
       
        
        var object = {};
        object.id = 0;
        object.user_id = user_id;
        object.first_price = first_price;
        object.last_price = last_price;
        object.first_time = first_time;
        object.last_time = last_time;
        object.state_id = 1;
        
        var json=JSON.stringify(object);
        
        var count=this.insertLot(json);
        
        //var element =document.getElementById("formAppointment");
        //element.innerHTML = count;
        
        return count;
    }
}




