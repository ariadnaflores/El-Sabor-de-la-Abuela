const POSTRES = [
    {id:1, name: "Galicia", description: "La tarta de Santiago está elaborada con almendras pulverizadas y mezcladas con huevo y azúcar a partes iguales a la que se le añade manteca y después se hornea hasta que la parte superior se endurece.",price: "S/22.00",foto:"imagenes/postres/galicia.jpg"},
    {id:2, name: "Asturias", description: "Las casadielles son una especie de empanadilla frita elaborada con una masa de harina de trigo que se rellena con una mezcla de nueces y/o avellanas, azúcar y anís que se sirven espolvoreas de azúcar.",price: "S/18.00",foto:"imagenes/postres/asturias.jpg"},
    {id:3, name: "Cantabria", description: "La quesada pasiega se preparaba en su origen con queso pasiego fresco. Sus primeras menciones datan del siglo XIV en una preparación parecida a lo que conocemos ahora por quesada, encontrada en el Libro del Buen Amor del Arcipreste de Hita.",price: "S/16.00",foto:"imagenes/postres/cantabria.jpg"},
    {id:4, name: "País Vasco", description: "El goxua (palabra que significa dulce en euskera) es un postre de Vitoria, aunque hoy está extendido en toda el área del País Vasco. ",price: "S/26.00",foto:"imagenes/postres/paisvasco.jpg"},
    {id:5, name: "Navarra", description: "La torta de Txantxigorri, llamada también tortas de chanchigorri o tortas de chalchigorri, son unas preparaciones reposteras muy típicas de la cocina navarra tradicional.",price: "S/23.00",foto:"imagenes/postres/navarra.jpg"},
    {id:6, name: "La Rioja", description: "Los fardelejos son un dulce de origen árabe que se comenzó a producir en la localidad de Quel en los siglos IX y X. Consiste en un recubrimiento de hojaldre muy fino con un relleno semejante al mazapán pero mucho más ligero compuesto de huevo, almendras molidas, ralladura de limón y azúcar.",price: "S/29.00",foto:"imagenes/postres/larioja.jpg"},
    {id:7, name: "Castilla y León", description: "Las yemas de Ávila (conocidas también como Yemas de Santa Teresa) son uno de los elementos de repostería más identificadores de la provincia de Ávila.",price: "S/12.00",foto:"imagenes/postres/castillayleon.jpg"},
    {id:8, name: "Aragón", description: "Las almojábanas se cocinan en épocas muy señaladas: San José (19 de marzo), Todos los Santos (1 de noviembre), Navidad, por ejemplo, y hace algunos años eran el plato estrella en bodas, bautizos y comuniones",price: "S/25.00",foto:"imagenes/postres/aragon.jpg"},
    {id:9, name: "Cataluña", description: "La crema catalana es un postre típico en la gastronomía de esa comunidad y consiste en una especie de crema pastelera a la que se le añade una pequeña cantidad de azúcar que se requema para aportarle un toque crujiente en la superficie.",price: "S/18.00",foto:"imagenes/postres/cataluña.jpg"},
    {id:10, name: "Madrid", description: "Los Bartolillos son unos dulces típicos de la repostería madrileña que se suelen elaborar en Semana Santa. Se trata de una especie de empanadillas de forma triangular y frita, que se elabora con una masa muy fina, y rellena de crema pastelera.",price: "S/20.00",foto:"imagenes/postres/madrid.jpg"},
    {id:11, name: "Extremadura", description: "Las perrunillas on un tipo de dulce de repostería tradicional que se caracteriza por ser una pasta de textura seca y áspera. Cuando se ingiere se suele deshacer en la boca",price: "S/30.00",foto:"imagenes/postres/extremadura.jpg"},
];
console.log(POSTRES);

$(POSTRES).each(function(indexInArray, valueOfElement) { 
    console.log(valueOfElement.name);
    var fila = "<tr>";
    fila += "<td>" + valueOfElement.id + "</td>"; 
    fila += "<td>" + valueOfElement.name + "</td>";
    fila += "<td>" + valueOfElement.description + "</td>";
    fila += "<td>" + valueOfElement.price+ "</td>";
    fila += "</tr>";

    $("#tbody-postres").append(fila);
})

$("#tbody-postres tr").click(function(){
    var position = $(this).index();
    console.log(position);
    console.log(POSTRES[position]);
    console.log(POSTRES[position].nombres);
    var nombres = POSTRES[position].name;
    var descripcion = POSTRES[position].description;
    var foto = POSTRES[position].foto;
    $("#postre-nombre").text(nombres);
    $("#postre-descripcion").text(descripcion);
    $("#postre-foto").attr("src",foto);
})