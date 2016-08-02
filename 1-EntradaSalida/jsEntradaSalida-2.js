/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var importe=prompt("Introducir importe.");
	var impuesto;
	impuesto=parseInt(importe*1.21);
	alert(impuesto);
}

