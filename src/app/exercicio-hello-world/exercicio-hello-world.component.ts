import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exercicio-hello-world',
  templateUrl: './exercicio-hello-world.component.html',
  styleUrls: ['./exercicio-hello-world.component.css']
})
export class ExercicioHelloWorldComponent implements OnInit {
  nome: string = "Pedrão Padrão"

  constructor() { }

  ngOnInit(): void {
  }

  limpar(){
    
  }


}
