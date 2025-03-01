function calcularDescuento (precioProducto, porcentajeDescuento){
    if ( isNaN(precioProducto) || precioProducto <= 0 || porcentajeDescuento <= 0 || porcentajeDescuento > 100 || 
    isNaN(porcentajeDescuento)) return "Datos inválidos";

    return precioProducto - (precioProducto * porcentajeDescuento / 100);
}

function evaluarNotas (calificacion){
    if (calificacion < 0 || calificacion > 100 || isNaN(calificacion)) return "Calificación inválida";

    if (calificacion >= 90) return "A - Excelente";
    if (calificacion >= 80) return "B - Muy bien";
    if (calificacion >= 70) return "C - Bien";
    if (calificacion >= 60) return "D - Regular";
    return "F - Reprobado";
}

let arrayNombres = ["Priscila", "Mariana", "Luis", "Ana", "Juan", "Pedro", "Pablo", "Maria", "Jose", "Carlos"];

function imprimirNombres (lista){
    lista.forEach( (nombre) => console.log(nombre));
}

console.log (calcularDescuento(100, 15));
console.log (evaluarNotas (50));
imprimirNombres(arrayNombres);