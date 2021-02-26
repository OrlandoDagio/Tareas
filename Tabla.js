var fila = document.getElementById("texto_filas");
var colum = document.getElementById("texto_columnas");
var boton = document.getElementById("botoncrear");
boton.addEventListener("click", creaTabla );

function createTable() {
    var body = document.getElementsByTagName("body")[0];

    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var c = parseInt(fila.value);
    var f = parseInt(colum.value);
    var i; 
    var j;

  for (i = 0; i < c; i++) {
  
    var hilera = document.createElement("tr");

    for (j = 0; j < f; j++) {
    
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("Fila"+i+", Columna"+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    tblBody.appendChild(hilera);
  }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "1");
}

function creaTabla()
{
createTable();
}
