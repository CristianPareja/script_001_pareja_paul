console.log("Hola mundo")
var a=1
var b=2
var c= a+b
console.log("El resultado es: ",c)

function addClass(containerDiv,className){
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)

}

/*este es un script que me permite asignar un estilo a todos los divs que contengan la clase content en el html, se define la clase juan en css
y con este script modificara todos los content con la informacion de juan en el css*/
/*function addClass(containerDiv, className){

Declara una función llamada addClass que recibe dos parámetros:

containerDiv: se espera que sea un elemento DOM (por ejemplo un <div>).

className: una cadena con el nombre de la clase que queremos añadir al elemento.

console.log(containerDiv.classList)

Imprime en la consola el classList del elemento containerDiv.

classList es un objeto DOMTokenList que muestra las clases CSS actuales del elemento (por ejemplo ["content", "otra-clase"]). Es útil para depuración.

containerDiv.classList.add(className)

Usa el método add del classList para añadir la clase className al elemento.

Si la clase ya existe, classList.add no la duplicará; simplemente no hace nada adicional.

}

Fin de la definición de la función addClass.

(línea en blanco)

Separador visual; no afecta la ejecución.

document.addEventListener("DOMContentLoaded", function() {

Escucha el evento DOMContentLoaded del document.

Ese evento se dispara cuando el HTML ha sido completamente cargado y parseado pero antes de que se carguen recursos como imágenes o estilos externos. Es ideal para ejecutar código que manipula el DOM de forma segura.

Al ocurrir, se ejecuta la función anónima que viene a continuación.

console.log("Ya se cargo este DOM");

Muestra en la consola el mensaje "Ya se cargo este DOM" indicando (para el desarrollador) que el DOM está listo y el código dentro del DOMContentLoaded se está ejecutando.

(línea en blanco)

Separador visual.

const containerDivs = document.querySelectorAll(".content");

Busca en el documento todos los elementos que coincidan con el selector CSS .content (es decir, con la clase content).

querySelectorAll devuelve un NodeList estático (similar a un array) con los elementos encontrados. Se asigna a la constante containerDivs.

console.log(containerDivs);

Imprime el NodeList en la consola para inspección: verás todos los elementos .content encontrados.

(línea en blanco)

containerDivs.forEach(div => {

Recorre el NodeList usando forEach. Por cada elemento en containerDivs se ejecuta la función flecha con el parámetro div (cada div es un elemento DOM).

console.log(div);

Imprime en la consola el elemento actual del bucle — útil para depurar y ver cada nodo individual.

addClass(div, "juan");

Llama a la función addClass definida arriba, pasando:

div (el elemento actual), y

la cadena "juan" como nombre de la clase que se va a añadir.

Resultado: cada elemento .content recibirá la clase adicional juan.
*/

document.addEventListener("DOMContentLoaded", function() {
    console.log("Ya se cargo este DOM");
    
    const containerDivs = document.querySelectorAll(".content");
    console.log(containerDivs);

    containerDivs.forEach(div => {
        console.log(div);
        addClass(div, "juan");
    });
});
