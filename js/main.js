//2.Implementar navegación con los menús usando FETCH usar 5 vinculos de acuerdo al tema de la web
$("#menu-item-servicios").click(function(){

    fetch("elementos/servicios.html")
        .then(function(response){
           return response.text();
        })
        .then(function(data){
            //console.log(data)
            $("#main-content").html(data);
        })
});

$("#menu-item-carta").click(function(){

    fetch("elementos/carta.html")
        .then(function(response){
           return response.text();
        })
        .then(function(data){
            //console.log(data)
            $("#main-content").html(data);
        })
});

$("#menu-item-blog").click(function(){

    fetch("elementos/blog.html")
        .then(function(response){
           return response.text();
        })
        .then(function(data){
            //console.log(data)
            $("#main-content").html(data);
        })
});

$("#menu-item-galeria").click(function(){

    fetch("elementos/galeria.html")
        .then(function(response){
           return response.text();
        })
        .then(function(data){
            //console.log(data)
            $("#main-content").html(data);
        })
});

$("#menu-item-postres-españoles").click(function(){

    fetch("elementos/postres-esp.html")
        .then(function(response){
           return response.text();
        })
        .then(function(data){
            //console.log(data)
            $("#main-content").html(data);
        })
});

$("#menu-item-consulta").click(function(){

    fetch("elementos/consulta.html")
        .then(function(response){
           return response.text();
        })
        .then(function(data){
            //console.log(data)
            $("#main-content").html(data);
        })
});