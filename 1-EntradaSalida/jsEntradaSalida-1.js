//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
	var numeroUno=prompt("Ingrese numero uno");
	var numeroDos=prompt("Ingrese numero dos");



	if (numeroUno>numeroDos) 
		{
			alert(numeroUno-numeroDos);
		}//if >

	if(numeroUno<numeroDos)
		{
			var suma= parseInt(numeroUno) + parseInt(numeroDos);
			alert(suma);
		}	

		

	if(numeroUno==numeroDos)
		{
			alert(numeroUno*numeroDos);
		}					

	

	
}

