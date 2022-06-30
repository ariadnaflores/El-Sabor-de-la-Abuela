fetch("json/carta.json")
            .then(function(response){
               return response.json();
            })
            .then(function(data){
                console.log(data)
                llenarTabla(data);
            });

function llenarTabla(data){
    $(data).each(function(indexInArray, valueOfElement) { 

        var fila = "<tr>";
        fila += "<td>" + valueOfElement.name + "</td>";
        fila += "<td>" + valueOfElement.source + "</td>";
        fila += "<td>" + valueOfElement.price + "</td>";
        fila += "</tr>";
    
        $("#tbody-carta").append(fila);
    })
}