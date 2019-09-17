import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { URL_API } from './app.api';

// import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {
    
    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: any) => {
                return resposta;
            });
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta;
            });
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0];
            });
    }
}
