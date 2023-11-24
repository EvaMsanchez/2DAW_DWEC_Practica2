// Ejercicio en JAVASCRIPT.
let boton = document.getElementById("agregarLinea");
// Añadir al botón un evento y una función para ese evento.
boton.addEventListener("click", mostrar);

function mostrar(event)
{
    event.preventDefault();

    // Obtener los valores introducidos en los inputs del formulario HMTL.
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio-unitario").value;
    let descuento = document.getElementById("descuento").value;

    // Mostrar esos valores por consola.
    console.log(`Producto: ${producto}`);
    console.log(`Cantidad: ${cantidad}`);
    console.log(`Precio-unitario: ${precio}`);
    console.log(`Descuento: ${descuento}`);
}


// Ejercicio en JQUERY.
$(document).ready(function()
{
    $("#agregarLinea").click(function()
    {
        // Obtener los valores introducidos en el formulario HTML.
        let producto = $("#producto").val();
        let cantidad = $("#cantidad").val();
        let precio = $("#precio-unitario").val();
        let descuento = $("#descuento").val();

        // Mostrar esos valores por consola.
        console.log(`Producto: ${producto}`);
        console.log(`Cantidad: ${cantidad}`);
        console.log(`Precio-unitario: ${precio}`);
        console.log(`Descuento: ${descuento}`);
    });
});
