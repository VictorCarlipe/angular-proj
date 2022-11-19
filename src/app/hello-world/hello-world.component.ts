import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  nome: string = "default"
  exibeNome:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  clique() {
    this.exibeNome = true;
  }

  esconderNome(){
    this.exibeNome = false;
  }
}
