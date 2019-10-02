import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco = 'Rua XYZ';
  public numero: number = 10;
  public complemento = '';
  public formaPagamento = 'debito';


  constructor() { }

  ngOnInit() {
  }

}
