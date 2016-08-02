/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var largo=document.getElementById('numeroUno').value;
	var ancho=document.getElementById('numeroDos').value;
	var perimetro= parseInt(largo*ancho);
	var alambre= parseInt(perimetro*3);
	alert("Usted necesita " + alambre + "  metros de alambre");

}

