import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component implements OnInit {

  public lista : any[] = [
    {descricao:"Tarefa 1", status:"pendente"}, 
    {descricao:"Tarefa 2", status:"concluido"}, 
    {descricao:"Tarefa 3", status:"pendente"}
  ];
  public tarefa : string = "";
  public status : string = "concluido";

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(){
    this.lista.push({descricao:this.tarefa, status:"pendente"});
  }

  remover(item: string){
    let index = this.lista.indexOf(item);
    this.lista.splice(index, 1);
  }

  concluir(item : any){
    if (item.status == "pendente"){
      item.status = "concluido";
    }
    else {
      item.status = "pendente";
    }
  }
}

