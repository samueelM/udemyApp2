import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { OfertaComponent } from '../app/oferta/oferta.component';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'restaurantes', component: RestaurantesComponent},
                        {path: 'diversao', component: DiversaoComponent},
                        {path: 'oferta', component: OfertaComponent},
                        {path: 'oferta/:id', component: OfertaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
