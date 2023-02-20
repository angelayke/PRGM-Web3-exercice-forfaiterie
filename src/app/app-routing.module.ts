import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { ListeEtsHotelwhynotComponent } from './liste-ets-hotelwhynot/liste-ets-hotelwhynot.component';
import { ListeEtsPourvoiriedulacComponent } from './liste-ets-pourvoiriedulac/liste-ets-pourvoiriedulac.component';
import { ListeEtsHoteldeglaceComponent } from './liste-ets-hoteldeglace/liste-ets-hoteldeglace.component';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';
import { GestionForfaitsComponent } from './gestion-forfaits/gestion-forfaits.component';
import { AproposComponent } from './apropos/apropos.component';
import { ForfaitMoinsCentComponent } from './forfait-moins-cent/forfait-moins-cent.component';

const routes: Routes = [
  { path: '', component: ListeForfaitsComponent },
  { path: 'apropos', component: AproposComponent},
  { path: 'forfaitmoinscent', component: ForfaitMoinsCentComponent},
  { path: 'hotelwhynot', component: ListeEtsHotelwhynotComponent },
  { path: 'pourvoirielac', component: ListeEtsPourvoiriedulacComponent },
  { path: 'hotelglace', component: ListeEtsHoteldeglaceComponent },
  { path: 'forfaits', component: GestionForfaitsComponent },
  { path: 'contact', component: FormulaireContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
