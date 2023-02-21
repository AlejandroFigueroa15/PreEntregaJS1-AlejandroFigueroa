//ingreso de datos
let nombre = prompt("Ingrese su nombre").toLowerCase();
while(nombre ===""){
    alert("Ingrese su nombre por favor");
    nombre = prompt("Ingrese su nombre").toLowerCase();
}

let apellido = prompt("Ingrese su apellido").toLowerCase();

while(apellido ===""){
    alert("Ingrese su apellido por favor");
    apellido = prompt("Ingrese su apellido").toLowerCase();
}    

alert("Hola "+ nombre + " " + apellido + "!te damos la bienvenida a nuestro simulador de préstamos");

let edad = parseInt(prompt("Por favor,ingrese su edad"));

// si la edad es mayor o igual a 18 podra acceder al préstamo
if(edad >=18){
    alert("Puede acceder al préstamo");
    let seleccionImporte = prompt("seleccione importe de $10000 hasta $1000000 max.");
    
    //seleccion de importe
    if(seleccionImporte >= 10000 && seleccionImporte <= 1000000){
        let seleccionCuotas = parseInt(prompt("seleccione la canitad de cuotas 6 , 9 , 12 , 15"));
        let cuotas6 = seleccionImporte / 6
        let cuotas9 = seleccionImporte / 9
        let cuotas12 = (seleccionImporte / 12) * 1.5
        let cuotas15 = (seleccionImporte / 12) * 1.75

        //seleccion de cuotas
        if(seleccionCuotas == 6 || seleccionCuotas == 9 || seleccionCuotas == 12 || seleccionCuotas == 15){
            switch(seleccionCuotas){

                //informacion de plan de cuotas
                case 6:
                     alert("Su prestamo sera en "+ seleccionCuotas +" cuotas de $" + cuotas6);
                     break
                 case 9:
                     alert("Su prestamo sera en "+ seleccionCuotas +" cuotas de $" + cuotas9);
                     break
                 case 12:
                     alert("Su prestamo sera en "+ seleccionCuotas +" cuotas de $" + cuotas12);
                     break
                 case 15:
                     alert("Su prestamo sera en "+ seleccionCuotas +" cuotas de $" + cuotas15);
                     break
                 default:
                     alert("Cantidad de cuotas ingresadas incorrecto");       
            }   
        }else{
            alert("Cantidad de cuotas ingresadas incorrecto");
        }
    }else{
        alert("Monto ingresado invalido");
    }

}else{
    alert("Disculpe,para solicitar un préstamo debe ser mayor de edad");
}

alert("¡Gracias por consultar nuestros servicios!")








 

     


