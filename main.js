//Ingreso de Datos
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


let age = parseInt(prompt("Por favor,ingrese su edad"));

// si la edad es mayor o igual a 18 podra acceder al préstamo
if(age >=18){

    alert("Puede acceder al préstamo"); 

    //seleccion de importe
    function newLoans(){

        let selectImport = prompt("seleccione importe de $10000 hasta $1000000 max.");
        
        if(selectImport >= 10000 && selectImport <= 1000000){
            
            let selectRepayments = parseInt(prompt("seleccione la canitad de cuotas 6 , 9 , 12 , 15"));

            //array
            const cuotas = [
                { cuota : 6, recargo : 1.1 },
                { cuota : 9 , recargo : 1.25 },
                { cuota : 12 , recargo : 1.5 },
                { cuota : 15 , recargo : 1.75 },
            ];

            //seleccion de cuotas
            if(selectRepayments == 6 || selectRepayments == 9 || selectRepayments == 12 || selectRepayments == 15){
                
                //informacion de plan de cuotas
                switch(selectRepayments){

                    case 6:
                        alert("Su prestamo sera en "+ selectRepayments +" cuotas de $" + ((selectImport/cuotas[0].cuota)*cuotas[0].recargo));
                        break
                    case 9:
                        alert("Su prestamo sera en "+ selectRepayments +" cuotas de $" + ((selectImport/cuotas[1].cuota)*cuotas[1].recargo));
                        break
                    case 12:
                        alert("Su prestamo sera en "+ selectRepayments +" cuotas de $" + ((selectImport/cuotas[2].cuota)*cuotas[2].recargo));
                        break
                    case 15:
                        alert("Su prestamo sera en "+ selectRepayments +" cuotas de $" +((selectImport/cuotas[3].cuota)*cuotas[3].recargo));
                        break
                    default:
                        alert("Cantidad de cuotas ingresadas incorrecto");       
                }

                ask();

            }else{
                alert("Cantidad de cuotas ingresadas incorrecto");
                
                ask();
            }
        }else if(selectImport !== Number){
            alert("Monto ingresado invalido");

            ask();
        }
    }
    newLoans();

    function ask(){

        let pregunta = prompt("Desea realizar una nueva consulta? Si / No").toLowerCase();
        
        if(pregunta === "si"){
            newLoans();
        }else{
            alert("¡Gracias por consultar nuestros servicios!");
        };
    };

}else{
    alert("Disculpe,para solicitar un préstamo debe ser mayor de edad");
    
    alert("¡Gracias por consultar nuestros servicios!")
}