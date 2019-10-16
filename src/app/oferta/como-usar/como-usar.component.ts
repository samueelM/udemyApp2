import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar = '';

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {

    this.route.parent.params.subscribe ((parametros: Params) => {

      this.ofertasService.getComoUsarOfertaPorID (parametros.id).
      then((resposta: string) => {
        this.comoUsar = resposta;
      });
    });
  }

}
