import { ItemCarrinho } from './shared/item-carrinho.model';

class CarrinhoService {

  public itens: ItemCarrinho[] = [];

  public exibirItens (): ItemCarrinho[] {
    return this.itens;
  }

}

export default CarrinhoService;
