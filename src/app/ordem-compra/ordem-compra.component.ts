import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco = '';
  public numero: string = '';
  public complemento = '';
  public formaPagamento = '';

  // controle de validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  constructor() { }

  ngOnInit() {
  }

  atualizaEndereco (endereco: string): void {
    this.endereco = endereco;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  atualizaNumero (numero: string): void {
    this.numero = numero;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  atualizaComplemento (complemento: string): void {
    this.complemento = complemento;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  atualizaFormaPagamento (formaPagamento: string): void {
    this.formaPagamento = formaPagamento;

    if (this.formaPagamento !== '') {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }


  }
}
