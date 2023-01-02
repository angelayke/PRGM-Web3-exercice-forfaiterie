import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { ListeEtsHotelwhynotComponent } from './liste-ets-hotelwhynot/liste-ets-hotelwhynot.component';
import { ListeEtsPourvoiriedulacComponent } from './liste-ets-pourvoiriedulac/liste-ets-pourvoiriedulac.component';
import { ListeEtsHoteldeglaceComponent } from './liste-ets-hoteldeglace/liste-ets-hoteldeglace.component';

const routes: Routes = [
 // { path: '', component: ListeProduitsComponent },
  { path: 'forfaits', component: ListeForfaitsComponent },
  //{ path: 'categories', component: ListeForfaitsComponent },
  { path: 'hotelwhynot', component: ListeEtsHotelwhynotComponent },
  { path: 'pourvoirielac', component: ListeEtsPourvoiriedulacComponent },
  { path: 'hotelglace', component: ListeEtsHoteldeglaceComponent },
  { path: 'contact', component: FormulaireContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
