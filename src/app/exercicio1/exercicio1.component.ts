import { Component, OnInit } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';

@Component({
  selector: 'exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  public altura: number = 0.0;
  public peso: number = 0.0;
  public resultado: number = 0.0;
  public classificacao : string = "";
  public visible : boolean = false;
  public cor : string = "";

  constructor() {
   }

  ngOnInit(): void {
 
  }

  calcularImc() {
    this.visible = true;
    this.resultado = this.peso / Math.pow(this.altura, 2);
    Math.round(this.resultado).toFixed(2);
    this.classificacaoImc();
  }

  hidderesult(){
    this.visible = false
  }

  classificacaoImc(){
    if (this.resultado < 16){
      this.classificacao = "Magreza grave";
      this.cor = "#C30000";
    } 
    else if (this.resultado >= 16 && this.resultado < 17){
      this.classificacao = "Magreza moderada";
      this.cor = "#F17A37";
    }  
    else if (this.resultado >= 17 && this.resultado < 18.5){
      this.classificacao = "Magreza leve";
      this.cor = "#465A6C";
    }
    else if (this.resultado >= 18.5 && this.resultado < 25){
      this.classificacao = "Saudável";
      this.cor = "#00AE5A";
    }
    else if (this.resultado >= 25 && this.resultado < 30){
      this.classificacao = "Sobrepeso";
      this.cor = "#425569";
    }
    else if (this.resultado >= 30 && this.resultado < 35){
      this.classificacao = "Obesidade Grau I";
      this.cor = "#F17C50";
    }
    else if (this.resultado >= 35 && this.resultado < 40){
      this.classificacao = "Obesidade Grau II (severa)";
      this.cor = "#C3000C";
    }
    else if (this.resultado >= 40){
      this.classificacao = "Obesidade Grau III (mórbida)";
      this.cor = "#C30000";
    }
  }

}
