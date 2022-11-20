import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {
  num1      : number = 0; 
  num2      : number = 0; 
  resultado : number = 0;
  operacao  : string = "Soma";
  showResult: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
    switch (this.operacao){
      case "Soma" :
        this.resultado = this.num1 + this.num2;
        break;
      case "Subtração" :
        this.resultado = this.num1 - this.num2;
        break;
      case "Multiplicação" : 
        this.resultado = this.num1 * this.num2;
        break;
      case "Divisão":
        this.resultado = this.num1 / this.num2;
    }
    this.showResult = true;
  }

  limpar(){
    this.showResult = false;
    this.resultado = 0;
  }

}
