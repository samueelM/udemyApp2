import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';


@Injectable()
export class OfertasService {

    constructor(private http: Http) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta.json();
            });
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta.json();
            });
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta.json()[0];
            });
    }

    public getComoUsarOfertaPorID (id: number): Promise<string> {
        return this.http.get (`${URL_API}/como-usar?id=${id}`).
            toPromise()
            .then ((resposta: Response) => {
                return resposta.json()[0].descricao;
            });
    }

    public getOndeFicaOfertaPorID (id: number): Promise<string> {
        return this.http.get (`${URL_API}/onde-fica?id=${id}`).
            toPromise()
            .then ((resposta: Response) => {
                return resposta.json()[0].descricao;
            });
    }

    public pesquisaOfertas (termo: string): Observable<Oferta[]> {
      return this.http.get (`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(
            retry(10),
            map ((resposta: Response) => {
              return resposta.json();
            }));
    }

}
