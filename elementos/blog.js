fetch("json/blog.json")
            .then(function(response){
               return response.json();
            })
            .then(function(data){
                console.log(data)
                llenarCards(data);
            });
function llenarCards(data){
    $(data).each(function(index,value){
        var caja = "<div class='col mb-4'>";
        caja += "<div class='card'>";
        caja += "<div class='card-body'>";
        caja += "<p class='card-text'>" + value.date + "</p>";
        caja += "<h5 class='card-title'>" + value.name + "</h5>";
        caja += "<p class='des-style'>" + value.description + "</p>";
        caja += "<a href='#' class='view_all_btn'> " + "Leer más..."+ "</a>";
        caja += "</div>";
        caja += "</div>";
        caja += "</div>";
        $("#tbody-blog").append(caja);
    })
}