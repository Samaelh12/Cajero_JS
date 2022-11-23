function formula() {
    let cantidad_Total = parseInt(document.getElementById('cant').value);
    let cantidad1 = parseInt(document.getElementById('c1').value);
    let cantidad2 = parseInt(document.getElementById('c2').value);
   
    document.getElementById('c1').value = (cantidad1 - cantidad_Total)
    document.getElementById('c2').value = (cantidad2 + cantidad_Total)
}

function formula2() {
    let cantidad_Total = parseInt(document.getElementById('cant').value);
    let cantidad1 = parseInt(document.getElementById('c1').value);
    let cantidad2 = parseInt(document.getElementById('c2').value);
   
    document.getElementById('c1').value = (cantidad1 + cantidad_Total)
    document.getElementById('c2').value = (cantidad2 - cantidad_Total)
}

function formula3() {
    let cantidad_Total = parseInt(document.getElementById('cant').value);
    let cantidad1 = parseInt(document.getElementById('c1').value);
   
    document.getElementById('c1').value = (cantidad1 + cantidad_Total)
}


function formula4() {
    let cantidad_Total = parseInt(document.getElementById('cant').value);
    let cantidad2 = parseInt(document.getElementById('c2').value);
   
    document.getElementById('c2').value = (cantidad2 + cantidad_Total)
}

function formula5() {
    let cantidad_Total = parseInt(document.getElementById('cant').value);
    let cantidad1 = parseInt(document.getElementById('c1').value);
   
    document.getElementById('c1').value = (cantidad1 - cantidad_Total)
}

function formula6() {
    let cantidad_Total = parseInt(document.getElementById('cant').value);
    let cantidad2 = parseInt(document.getElementById('c2').value);
   
    document.getElementById('c2').value = (cantidad2 - cantidad_Total)
}



/**
 * Faltó diseño al cajero, pero por cuestiones de tiempo decidí sólo enfocarme en la funcionalidad del código.
 
 */