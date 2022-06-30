fetch("http://localhost/servicioWebProyecto/categorias.php")
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data)
        llenarLista(data);
    });

    function llenarLista(data){
        $(data).each(function(indexInArray, valueOfElement) { 
            var item = '<li class="list-group-item">'; 
            item += '<h5>' + valueOfElement.nombre + '</h5>';
            item += '<p>' + valueOfElement.descripcion + '</p>';
            item +=  '</li>';
        
         $("#lista-categorias").append(item);
        });
        $("#lista-categorias li").click(function(){
            var posicion = $(this).index();
            console.log(posicion);
            $("#categoria-nombre").text(data[posicion].nombre);
            $("#categoria-descripcion").text(data[posicion].descripcion);
            console.log(data[posicion].idCategoria);
            var idCategoria = data[posicion].idCategoria;
            llenarProductosPorCategoria(idCategoria)
        })
   }
   function llenarProductosPorCategoria(idcategoria){
    var rutaServicio = "https://localhost/servicioWebProyecto/productosxcategoria.php";
    var formData = new FormData();
    formData.append("caty",idcategoria)

    fetch(rutaServicio,
        {
            method: "POST",
            body: formData        
        })

    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);
        llenarTablaProductos(data);
    })
}  
function llenarTablaProductos(data){
    $("#tbody-productos").html("");
    $(data).each(function(indexInArray, valueOfElement) { 
        var fila = "<tr>";
        fila += "<td>" + valueOfElement.idproducto + "</td>"; 
        fila += "<td>" + valueOfElement.nombre + "</td>";
        fila += "<td>" + valueOfElement.detalle + "</td>";
        fila += "<td class='text-end'>" + (parseFloat(valueOfElement.precio)).toFixed(2) + "</td>";
        fila += "</tr>";
    
        $("#tbody-productos").append(fila);
    });

    $("#cards-productos").html("");
    $(data).each(function(indexInArray, valueOfElement) { 
        var card = '<div class="col">';
        card += '<div class="card">';
        card += '<img src="http://localhost/servicioWebProyecto/imagenes/' + valueOfElement.foto + '" class="card-img-top" alt="...">';            
        card += '<div class="card-body">';
        card += '<h5 class="card-title">'  + valueOfElement.nombre +  '</h5>';
        card += '<p class="card-text">' + valueOfElement.detalle + '</p>';
        card += '<p class="card-text">' + (parseFloat(valueOfElement.precio)).toFixed(2); + '</p>';
        card += '</div>'
        card += '</div>'
        card += '</div>'
    
        $("#cards-productos").append(card);
    });
   
}