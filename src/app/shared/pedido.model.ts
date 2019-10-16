import { ItemCarrinho } from "./item-carrinho.model";

export class Pedido {

    constructor (public endereco: string,
                public numero: string,
                public comlemento: string,
                public formaPagamento: string,
                public itens: ItemCarrinho[]) {

                }

}
