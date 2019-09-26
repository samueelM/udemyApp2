import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    // const obs: Observable<string> = this.subjectPesquisa.asObservable();
    // obs.pipe (switchMap((termo: string) => {
    //   console.log ('requisicao http: ');
    //   return this.ofertasService.pesquisaOfertas (termo);
    // }));

    const obs: Observable<any> = this.subjectPesquisa.asObservable();

    this.ofertas = obs.pipe (switchMap((termo: string) => {
      console.log ('requisicao http: ');
      return this.ofertasService.pesquisaOfertas (termo);
    }));

    this.ofertas.subscribe ((ofertas: Oferta[]) => console.log (ofertas));
  }

  public pesquisa (termoDaBusca: string): void {
    console.log ('termo da busca: ' + termoDaBusca);
    this.subjectPesquisa.next (termoDaBusca);
    // this.ofertas = this.ofertasService.pesquisaOfertas (termoDaBusca);

    // this.ofertas.subscribe(
    //          (ofertas: Oferta[]) => console.log (ofertas),
    //          (erro: any) => console.log ('Erro status:', erro.status),
    //          () => console.log ('Fluxo de eventos finalizado..'));
  }

}
