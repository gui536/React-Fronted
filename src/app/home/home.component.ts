import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

nomeProduto: string = 'Curso de Angular';
idProduto: number = 123;
precoProduto: number = 2.59;
promocao: boolean = true;
anuncio: string = `O ${this.nomeProduto} está em promoção!`;


  constructor() {
    // variáveis de string com concatenação
    //this.anuncio = 'O ' + this.nomeProduto + 'está em promoção!';

    console.log('Nome do Produto', this.nomeProduto)
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);


    let idade = 10;
    function imprimeIdade(){
      for (let idade = 30; idade <=40; idade++){
      console.log('Idade dentro do For é: ', idade);
      }
      console.log('Idade fora do for: ', idade);
    }

    imprimeIdade();

   }

  ngOnInit(): void {
  }

}
