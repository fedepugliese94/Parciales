/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno=prompt("Ingrese numero uno");
	var numeroDos=prompt("Ingrese numero dos");

	if (numeroUno == numeroDos) 
			{
				alert(numeroUno*numeroDos);

				if (numeroUno>numeroDos) 
						{
							alert(numeroUno-numeroDos);
						}//if >


			}//if ==

	else
		{
			alert(numeroUno+numeroDos);
		}		


}
