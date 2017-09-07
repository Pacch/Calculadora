let x="0"; //número en pantalla
let xi=1; //iniciar número en pantalla: 1=si; 0=no;
let coma=0; //estado coma decimal 0=no, 1=si;
let ni=0; //número oculto o en espera.
let op="no"; //operación en curso; "no" =  sin operación.
let sp = 0

function mostrar(){  //obtener el dato;
	 return mostrarPantallaPrincipal = document.getElementById("pantalla");	
}
function mostrarSubPantalla(){  //obtener el dato;
	 return mostrarPantallaSecundaria = document.getElementById("sub__pantalla");	
}

function numero(ev) { //recoge el número pulsado en el argumento.
		let data = this.dataset.numero;//obtener el dataset del html
         if (x=="0" || xi==1  ) {	// inicializar un número, 
            mostrar().innerHTML=data; //mostrar en pantalla
            x=data; //guardar número
            if (data==".") { //si escribimos una coma al principio del número
               mostrar().innerHTML="0."; //escribimos 0.
               x=data; //guardar número
         
               coma=1; //cambiar estado de la coma
               }
           }
           else { //continuar escribiendo un número
               if (data=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                   mostrar().innerHTML+=data;
                   x+=data;//sumamos los datos progresivamente.
                   
                   coma=1; //cambiar el estado de la coma 
               }
               //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
               else if (data=="." && coma==1) {

               } 
               //Resto de casos: escribir un número del 0 al 9: 	 
               else {
                   mostrar().innerHTML+=data;
                   x+=data
                   
               }
            }
            xi=0 //el número está iniciado y podemos ampliarlo.
         }




function operar(ev) {
		let  s = this.dataset.operacion;
		if (s === "+" || s === "-" || s === "*" || s ==="/")  {
         ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operación.
         xi=1; //inicializar pantalla.
         sp=ni +" "+ op;
         console.log(sp);
         mostrarSubPantalla().innerHTML=sp;	
		}else{
		 igualar()
			}

		}	

function igualar() {
         if (op=="no") { //no hay ninguna operación pendiente.
            pantalla.innerHTML=x;	//mostramos el mismo número	
            }
         else { //con operación pendiente resolvemos
            sl=ni + op + x; // escribimos la operación en una cadena
            
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            pantalla.innerHTML=sol //mostramos la solución
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
        }

function borrar(ev){
	let  backspace = this.dataset.borrar;
	if(backspace ==="CE"){
		x="0";
		n1= "0";
		mostrar().innerHTML="";
	}else if (x != 0) {
		array=[...x];
		ultimoElementoBorrado=array.pop();
		sinComas=array.join('');
		x= sinComas;
		mostrar().innerHTML=x;
	}else if(ni != 0){
		array=[...ni];
		ultimoElementoBorrado=array.pop();
		sinComas=array.join('');
		ni= sinComas;
		mostrar().innerHTML=ni;
	}else if(sol!= 0){
		array=[...sol];
		ultimoElementoBorrado=array.pop();
		sinComas=array.join('');
		sol= sinComas;
		mostrar().innerHTML=sol;
	}
}

const obtenerNummero = document.querySelectorAll(".data__numero");
for (var i = 0; i < obtenerNummero.length; i++) {
obtenerNummero[i].addEventListener('click',numero);
}

const obtenerOperacion = document.querySelectorAll(".data__operacion");
for (var i = 0; i < obtenerOperacion.length; i++) {
obtenerOperacion[i].addEventListener('click',operar);
}

const obtenerBorrado = document.querySelectorAll(".data__borrar");
for (var i = 0; i < obtenerBorrado.length; i++) {
obtenerBorrado[i].addEventListener('click',borrar);
}

