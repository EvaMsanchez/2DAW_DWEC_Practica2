// Ejercicio en JAVASCRIPT.
// Seleccionar un elemento con id "cuerpo-tabla".
console.log(document.getElementById("cuerpo-tabla"));

// Seleccionar el primer elemento con id "producto".
console.log(document.querySelector("#producto"));

// Seleccionar todos los elementos con id "cantidad" y escogemos el primero.
console.log(document.querySelectorAll("#cantidad")[0]);

// Seleccionar un elemento con id "precio-unitario".
console.log(document.getElementById("precio-unitario"));

// Seleccionar el primer elemento input con el atributo name = "descuento".
console.log(document.querySelector("input[name='descuento']"));

// Seleccionar todos los elementos con id "agregarLinea" y escogemos el primero.
console.log(document.querySelectorAll("#agregarLinea")[0]);


// Ejercicio en JQUERY.
// Acceder a los diferentes elementos por sus id.
console.log($("#cuerpo-tabla"));
console.log($("#producto"));
console.log($("#cantidad"));
console.log($("#precio-unitario"));
console.log($("#descuento"));
console.log($("#agregarLinea"));