import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  aRomano(n){
	  var letras = ['I','IV','V','IX','X'];
	  var numeros = [1,4,5,9,10];
	  var i = letras.length;
	  var resultado = "";
	  if(n <=0){
		  return resultado = "No se puede calcular"
	  }
	  while(n>0){
		if(n>=numeros[i]){
			resultado = resultado.concat(letras[i])
			n = n - numeros[i];	
		}else{
			i = i-1;
		}
	  }
	  return resultado;
  }
    
  
}
