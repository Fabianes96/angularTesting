import { Injectable } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  aRomano(n){
	  var letras = ['I','IV','V','IX','X','XL','L','XC','C','CD','D'];
	  var numeros = [1,4,5,9,10,40,50,90,100,400,500];
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
