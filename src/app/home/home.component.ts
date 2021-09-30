import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

nomeProduto: string = 'Curso de Angular';
idProduto: number = 3;
precoProduto: number = 2.59;
promocao: boolean = true;
anuncio: string = `O ${this.nomeProduto} está em promoção!`;
foto: string = 'assets/img/crud.png';
dataValidade: string = '2021-12-31';


  constructor() {
    // variáveis de string com concatenação
    //this.anuncio = 'O ' + this.nomeProduto + 'está em promoção!';

    console.log('Nome do Produto', this.nomeProduto)
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);
   }

  ngOnInit(): void {
  }

}
