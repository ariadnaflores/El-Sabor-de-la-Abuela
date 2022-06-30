fetch("https://www.breakingbadapi.com/api/characters")
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
        fila += "<td>" + valueOfElement.char_id + "</td>"; 
        fila += "<td>" + valueOfElement.name + "</td>";
        fila += "<td>" + valueOfElement.occupation + "</td>";
        fila += "<td>" + valueOfElement.nickname + "</td>";
        fila += "<td>" + valueOfElement.portrayed +"</td>";
        fila += "</tr>";
    
        $("#tbody-servicios").append(fila);
    });
}
