// Ejercicio en JAVASCRIPT.
let boton = document.getElementById("agregarLinea");
// Añadir al botón un evento y una función para ese evento.
boton.addEventListener("click", agregar);

function agregar(event)
{
    event.preventDefault();

    // Obtener valores introducidos en los inputs del formulario HTML.
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio-unitario").value;
    let descuento = document.getElementById("descuento").value;

    // Crear una fila.
    let tr = document.createElement("tr");

    // Crear diferentes celdas.
    let tdProducto = document.createElement("td");
    let tdCantidad = document.createElement("td");
    let tdPrecio = document.createElement("td");
    let tdDescuento = document.createElement("td");

    // Añadir a cada celda los valores introducidos desde el formulario HTML.
    tdProducto.innerHTML = producto;
    tdCantidad.innerHTML = cantidad;
    tdPrecio.innerHTML = precio;
    tdDescuento.innerHTML = descuento;

    // Agregar celdas a la fila.
    tr.append(tdProducto);
    tr.append(tdCantidad)
    tr.append(tdPrecio);
    tr.append(tdDescuento);

    // Clonar el botón y añadirlo a la fila.
    let boton2 = document.getElementById("agregarLinea").cloneNode(true);
    tr.append(boton2);

    // Añadir la fila a la tabla.
    document.getElementById("cuerpo-tabla").append(tr);
}


// Ejercicio en JQUERY.
$(document).ready(function()
{
    $("#agregarLinea").click(function()
    {
        // Obtener valores introducidos en el formulario HTML.
        let producto = $("#producto").val();
        let cantidad = $("#cantidad").val();
        let precio = $("#precio-unitario").val();
        let descuento = $("#descuento").val();

        // Crear fila y celdas, añadiendo a cada celda los valores introducidos desde el formulario HTML.
        let tr = $("<tr>");
        let tdProducto = $("<td>").text(producto);
        let tdCantidad = $("<td>").text(cantidad);
        let tdPrecio = $("<td>").text(precio);
        let tdDescuento = $("<td>").text(descuento);

        // Agregar celdas a la fila.
        tr.append(tdProducto);
        tr.append(tdCantidad);
        tr.append(tdPrecio);
        tr.append(tdDescuento);

        // Clonar el botón y añadirlo a la fila.
        let boton2 = $("#agregarLinea").clone();
        tr.append(boton2);

        // Añadir la fila a la tabla.
        $("#cuerpo-tabla").append(tr);
    });
});