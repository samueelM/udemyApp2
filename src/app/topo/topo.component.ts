import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


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
    const obs: Observable<any> = this.subjectPesquisa.asObservable();

    this.ofertas = obs
    .pipe (debounceTime(1000))  // executa a ação do switchMap após 1 segundo.
    .pipe (distinctUntilChanged()) // para fazer pesquisas distintas
    .pipe(switchMap((termo: string) => {

      if (termo.trim() === '') {
        return of<Oferta[]> ([]);
      }

      return this.ofertasService.pesquisaOfertas (termo);
    })).pipe (catchError ((err: any) => {
      console.log (err);
      return of<Oferta[]>([]);
    }));

  }

  public pesquisa (termoDaBusca: string): void {
    this.subjectPesquisa.next (termoDaBusca.trim());
    // this.ofertas = this.ofertasService.pesquisaOfertas (termoDaBusca);

    // this.ofertas.subscribe(
    //          (ofertas: Oferta[]) => console.log (ofertas),
    //          (erro: any) => console.log ('Erro status:', erro.status),
    //          () => console.log ('Fluxo de eventos finalizado..'));
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }

}
