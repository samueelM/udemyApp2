import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

class CarrinhoService {

  public itens: ItemCarrinho[] = [];

  public exibirItens (): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem (oferta: Oferta): void {
    const itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id, oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );

    const itemCarrinhoEncontrado = this.itens.find ((item: ItemCarrinho) => item.id === itemCarrinho.id );
  
      if (itemCarrinhoEncontrado) {
        itemCarrinhoEncontrado.quantidade += 1;
      } else {
        this.itens.push (itemCarrinho);
      }
  }

  public totalCarrinhoCompras (): number {
    let total: number = 0;

    this.itens.map ((item: ItemCarrinho) => {
      total += (item.valor * item.quantidade);
    });

    return total;
  }

}

export {CarrinhoService};
