class UserController
{
    constructor()
    {
        this.userService = new UserService();
    }
    
    // DATAController
    getAllUser()
    {
        return this.userService.getAllUser();
    }
    
    getUserById(id)
    {
        return this.userService.getUserById(id);
    }
    
    //ViewController
    getAllUserView()
    {
        var data=this.getAllUser();
        var result="";
        for(var i=0; i<data.length;i++)
        {
            var id=data[i].id;
            var login=data[i].login;
            var password=data[i].password;
            result += "<div class='item-listing small-padding-bg' style='margin-bottom: 10px; background-color: #eee;'>"+
                        "<div class='container'>"+
                            "<div class='row'>"+
                                        "<div class='col-md-9 home-list-pop-desc inn-list-pop-desc'> <a href='#' onclick='userClick(" + id + ")'><h3>" + login + "</h3></a>"+
                                            "<p class='spec' style='font-size: 1.2em;'><b>Пароль: </b> " + password + "</p>"+
                                            "<p><br></p>"+        
                                            "<div class='col-lg-offset-1 list-enquiry'>"+
                                                "<ul>"+
                                                "<li onclick='makeUser(" + id + ")' class='btn btn-md btn-warning'><a href='#user' style='color: #fff; text-decoration: none;'><i class='fa fa-star-o' aria-hidden='true'></i>Записаться на прием</a> </li>"+			
                                                "</ul>"+
                                            "</div>"+
                                        "</div>"+
                            "</div>"+
                        "</div>"+
                      "</div>";
        }
        
        var element =document.getElementById("user");
        element.innerHTML = result;
    }
    
    getUserByIdView(id)
    {
        var data=this.getUserById(id);
        var result="";
        var id=data.id;
        var fio=data.fio;
        var specialization=data.specialization;
        var number_phone=data.number_phone;
        var photo=data.photo;
        result += "<div class='row'>"+
                  "<div class='col-md-3 col-xs-12 col-sm-6 col-lg-3'>"+
                    "<div class='thumbnail text-center photo_view_postion_b' >"+
                      "<img src='data:image/png;base64," + photo + "' alt=''>"+
                    "</div>"+
                  "</div>"+
                  "<div class='col-md-9 col-xs-12 col-sm-6 col-lg-9'>"+
                      "<div class='' style='border-bottom:1px solid black'>"+
                        "<h2>" + fio + "</h2>"+
                      "</div>"+
                        "<hr>"+
                      "<div class='col-md-7'>"+
                          "<div><p><span class='glyphicon glyphicon-earphone one' style='width:50px;'></span>" + number_phone + "</p></div>"+
                          "<div><p><span class='glyphicon glyphicon-plus-sign one' style='width:50px;'></span>" + specialization + "</p></div>"+
                      "</div>"+
                      "<div class='list-enquiry' style='text-align: right;'>"+
                          "<ul>"+
                          "<li onclick='makeAppointment(" + id + ")' class='btn btn-md btn-warning'><a href='#appointment' style='color: #fff; text-decoration: none;'><i class='fa fa-star-o' aria-hidden='true'></i>Записаться на прием</a> </li>"+		
                          "</ul>"+
                      "</div>"+
                  "</div>"+
                "</div>"+                
                "<div class='row'>"+
                  "<div class='form-group row'>"+
                    "<div class='col-md-12'>"+                    
                    "<div class='form-group' style='border-bottom:1px solid black'>"+
                        "<h2>Информация</h2>"+
                    "</div>"+
                    "</div>"+
                  "</div>"+
                "</div>"+
                "<div class='row'>"+
                 "<div class='col-md-12'>"+
                    "<p>Доктор медицины (MD от латинского доктора медицины) является медицинской степенью, \n\
                        смысл которой варьируется между различными юрисдикциями. В некоторых странах МД \n\
                        обозначает первую профессиональную степень, присужденную по окончании обучения в медицинской школе. \n\
                        В других странах МД обозначает академическую исследовательскую докторантуру, высшее докторантуру,\n\
                        почетную докторскую или продвинутую клиническую степень обучения, ограниченную медицинскими выпускниками; \n\
                        в этих странах эквивалентная первая профессиональная степень называется по-разному (например, степень \n\
                        бакалавра медицины, степень бакалавра хирургии по традиции Соединенного Королевства) </p>"+
                 "</div>"+
                "</div>";
        
        var element =document.getElementById("user");
        element.innerHTML = result;
    }
    
    authentication()
    {
        var login=document.getElementById("inputlogin").value;
        var password=document.getElementById("inputpassword").value;
        
        login=login.toLowerCase();
        
        var data=this.getAllUser();
        for(var i=0; i<data.length;i++)
        {
            var login=data[i].login;
            var password=data[i].password;
            if (login == login && password == password)
            {
                /*document.getElementById("user").value = userName;
                document.getElementById("cancel").click();*/
                
                var element =document.getElementById("success");
                element.innerHTML = "<a href='#' onclick='userClick(" + data[i].id + ")'><h3>" + userName + "</h3></a>";
                
                return 1;
            }                
        }
        
        //document.getElementById("userName").value = "ERROR!!!!!!!";
        return 0;
    }
}