import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {


  // Pedido
  pedido = new Pedido ('', '', '', '');

  public endereco = '';
  public numero = '';
  public complemento = '';
  public formaPagamento = '';

  // controle de validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  // estados primitvos dos campos (pristine)
  public enderecoEstadoPrimitvo: boolean = true;
  public numeroEstadoPrimitvo: boolean = true;
  public complementoEstadoPrimitvo: boolean = true;
  public formaPagamentoEstadoPrimitvo: boolean = true;

  // controlar botão confirmar compra
  public formEstado = 'disabled';

  public idPedidoCompra: number;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    // this.ordemCompraService.efetivarCompra ();

  }

  atualizaEndereco (endereco: string): void {
    this.endereco = endereco;

    this.enderecoEstadoPrimitvo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }

  atualizaNumero (numero: string): void {
    this.numero = numero;

    this.numeroEstadoPrimitvo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.habilitaForm();
  }

  atualizaComplemento (complemento: string): void {
    this.complemento = complemento;

    this.complementoEstadoPrimitvo = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  atualizaFormaPagamento (formaPagamento: string): void {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoEstadoPrimitvo = false;

    if (this.formaPagamento !== '') {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }

    this.habilitaForm();
  }

  public habilitaForm () {

    if (this.enderecoValido &&
        this.formaPagamentoValido &&
        this.numeroValido) {
          this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmarCompra() {

    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.comlemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.ordemCompraService.efetivarCompra (this.pedido).subscribe (
      (idPedido: number) => {
        this.idPedidoCompra = idPedido;
      }
    );
  }
}
