import { Component, OnInit } from '@angular/core';
import { Livro } from './livro.interface';

@Component({
  selector: 'livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Livro[] = [
    {
      nome: 'JavaScript: O guia definitivo', 
      autor:'David Flanagan',
      publicacao: new Date(2021,0,15),
      preco: 10.5
    },
    {
      nome: 'O Melhor do JavaScript', 
      autor:'Douglas Cockford',
      publicacao: new Date(2021,0,15),
    },
    {
      nome: 'JavaScript Design Patterns',
      autor:'Addy Osmani',
      preco: 27.90,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
