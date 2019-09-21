import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, interval, Observer } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta ) => {
        this.oferta = oferta;
      });

/*    this.route.params.subscribe(
      (parametro: any) => console.log (parametro),
      (erro: any) => console.log (erro),
      () => 'processamento foi classificado como concluído!'
      ); */
      
      /*
      let tempo = interval(3000);

      tempo.subscribe ((intervalo: number) => console.log (intervalo));
      */

      // observable
      let meuObservableTeste = Observable.create ((observer: Observer<number>) => {
          observer.next(1);
          observer.next(3);
      });

      // observador
      meuObservableTeste.subscribe ((resultado: number) => console.log (resultado + 10));


  }

}
