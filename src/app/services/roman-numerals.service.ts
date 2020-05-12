import { Injectable } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  aRomano(n){
	  var letras = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
	  var numeros = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
	  var i = letras.length;
	  var resultado = "";
	  if(n <=0 || n>1000){
		  return resultado = "Número por fuera de los limites"
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
