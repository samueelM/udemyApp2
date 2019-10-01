import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, interval, Observer, observable, Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit/*, OnDestroy*/ {

  public oferta: Oferta;
  // private tenmpoObservableSubscription: Subscription;
  // private meuObservableTesteSubscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  // ngOnDestroy(): void {
  //   this.tenmpoObservableSubscription.unsubscribe();
  //   this.meuObservableTesteSubscription.unsubscribe();
  // }


  ngOnInit() {

    this.route.params.subscribe ((parametros: Params) => {
        this.ofertasService.getOfertaPorId(parametros.id)
        .then(( oferta: Oferta ) => {
          this.oferta = oferta;
        });
    });

/*    this.route.params.subscribe(
      (parametro: any) => console.log (parametro),
      (erro: any) => console.log (erro),
      () => 'processamento foi classificado como concluído!'
      ); */


      // let tempo = interval(2000);

      // this.tenmpoObservableSubscription = tempo.subscribe ((intervalo: number) => console.log (intervalo));


      // // observable
      // let meuObservableTeste = Observable.create ((observer: Observer<number>) => {
      //     observer.next(1);
      //     observer.next(3);
      //     // observer.error ('algum erro foi encontrado na stream de eventos...');
      //     observer.complete ();
      // });

      // // observador
      // this.meuObservableTesteSubscription = meuObservableTeste.subscribe (
      //   (resultado: number) => console.log (resultado + 10),
      //   (erro: string) => console.log (erro),
      //   () => console.log ('a stream de eventos foi finalizada'));


  }

}
