/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var dia=prompt("Introducir el dia con la primera letra en mayuscula.");
	switch(dia)
		{
			case "Lunes":
			case "Martes":
			case "Miercoles":
			case "Jueves":
			case "Viernes":
				{
					alert("A TRABAJAR");
					break;
				}	

			case "Sabado":
			case "Domingo":
				{
					alert("FIN DE SEMANA!!!");
					break;
				}	
		}//switch
}


