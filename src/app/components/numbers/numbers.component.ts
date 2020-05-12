import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService } from '../../services/roman-numerals.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  
  public resultado: String = ""
  constructor(public rms :RomanNumeralsService) {    
  }  
  ngOnInit(): void {    
  }
  romanos(n){
    if(n === String || n == ""){
      this.resultado = "Número invalido" 
    }else{
      this.resultado = "";
      this.resultado=this.rms.aRomano(n);          
    }    
  }
}
