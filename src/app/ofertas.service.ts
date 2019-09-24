import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => {
                return resposta;
            });
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta;
            });
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0];
            });
    }

    public getComoUsarOfertaPorID (id: number): Promise<string> {
        return this.http.get (`${URL_API}/como-usar?id=${id}`).
            toPromise()
            .then ((resposta: any) => {
                return resposta[0].descricao;
            });
    }

    public getOndeFicaOfertaPorID (id: number): Promise<string> {
        return this.http.get (`${URL_API}/onde-fica?id=${id}`).
            toPromise()
            .then ((resposta: any) => {
                return resposta[0].descricao;
            });
    }

    public pesquisaOfertas (termo: string): Observable<Oferta[]> {
      return this.http.get (`${URL_API}/ofertas?descricao_oferta=${termo}`).
        pipe(
            map ((resposta: any) => resposta.json));
    }

}
