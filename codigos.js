


//Definir las variables
const codigoVerificacion = 1234;
const montoMinimo_menorEdad = 60000;
let edad, saldo, prestamo, interes_mensual,nombre, codigo,
total_A_pagar;


// alert("****************BANCO ESTADO DE CHILE***********\n\nBIENVENIDOS AL SISTEMA DE PRESTAMO EN LÍNEA.");

nombre = prompt("Ingrese su nombre de usuario : ");
codigo = parseInt(prompt("Ingrese su código verificacion : "));

 if (codigo === codigoVerificacion) {
    alert("Bienvenido señor(a) cliente...");
     edad = parseInt(prompt("Por favor ingrese su edad."));
    if (edad < 18) {
        saldo = parseInt(prompt("Eres menor de edad,debes ingresar tu saldo en cuenta:"));
        if (saldo >= montoMinimo_menorEdad) {
           alert("Tienes derechos al préstamo.");
            let prestamo = parseInt(prompt("Cuántos dineros quieres prestar: "));
            if (prestamo >= 9000) {
                interes_mensual = prestamo * 0.05
                alert("Tu interes mensual es: CLP " + interes_mensual);
            } else {
                interes_mensual = prestamo * 0.08
                alert("Tu interes mensual es: CLP " + interes_mensual);
            }
            total_A_pagar = interes_mensual * 12 + prestamo;
            alert("El total de su deuda por el año completo es : CLP " +total_A_pagar);
        } else {
            alert("No tienes saldo suficiente para el prestamo.");
        }
    } else {
        alert(" Tienes derecho al préstamo. ");
        let prestamo = parseInt(prompt("Cuántos dinero quieres prestar: "));
        if (prestamo >= 9000) {
            interes_mensual = prestamo * 0.05
            alert("Tu interes mensual es: CLP " + interes_mensual);
        } else {
            interes_mensual = prestamo * 0.08
            alert("Tu interes mensual es: CLP " + interes_mensual);
        }
        total_A_pagar = (interes_mensual * 12) + prestamo;
        alert("El total de su deuda por el año completo es : CLP " +total_A_pagar); 
    }     
} else {
    alert("No eres un cliente,debes dirigirse al sucursal más cercana para crear su cuenta.");
}










