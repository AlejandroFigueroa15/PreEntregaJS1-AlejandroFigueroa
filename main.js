//Ingreso Cliente
let nombre = prompt("Ingrese su nombre").toLowerCase();
while(nombre ===""){
    alert("Ingrese su nombre por favor");
    nombre = prompt("Ingrese su nombre").toLowerCase();
}

let lastName = prompt("Ingrese su apellido").toLowerCase();
while(lastName ===""){
    alert("Ingrese su apellido por favor");
    lastName = prompt("Ingrese su apellido").toLowerCase();
}

//const client1 = client (nombre,lastName);
alert("Hola "+ nombre + " " + lastName + "!te damos la bienvenida a nuestro simulador de préstamos");

let age = parseInt(prompt("Por favor,ingrese su edad"));

// si la edad es mayor o igual a 18 podra acceder al préstamo
if(age >=18){
    alert("Puede acceder al préstamo");
    let selectImport = prompt("seleccione importe de $10000 hasta $1000000 max.");
}else{
    alert("Disculpe,para solicitar un préstamo debe ser mayor de edad");
}

//seleccion de importe
    if(isNaN(selectImport !== Number)){
    alert("Monto ingresado invalido");
    }else if(selectImport >= 10000 && selectImport <= 1000000){
        let selectRepayments = parseInt(prompt("seleccione la canitad de cuotas 6 , 9 , 12 , 15"));
            let repayments6 = selectImport / 6
            let repayments9 = selectImport / 9
            let repayments12 = (selectImport / 12) * 1.5
            let repayments15 = (selectImport / 15) * 1.75

            //seleccion de cuotas
            if(selectRepayments == 6 || selectRepayments == 9 || selectRepayments == 12 || selectRepayments == 15){
                switch(selectRepayments){

                    //informacion de plan de cuotas
                    case 6:
                        alert("Su prestamo sera en "+ selectRepayments +" cuotas de $" + repayments6);
                        break
                    case 9:
                        alert("Su prestamo sera en "+ selectRepayments +" cuotas de $" + repayments9);
                        break
                    case 12:
                        alert("Su prestamo sera en "+ selectRepayments +" cuotas de $" + repayments12);
                        break
                    case 15:
                        alert("Su prestamo sera en "+ selectRepayments +" cuotas de $" + repayments15);
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


alert("¡Gracias por consultar nuestros servicios!")








 

     


