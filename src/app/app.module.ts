import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import { MatSliderModule} from '@angular/material/slider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupeForfaitsComponent } from './groupe-forfaits/groupe-forfaits.component';
import { PrixComponent } from './prix/prix.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { FormulaireAvisComponent } from './formulaire-avis/formulaire-avis.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    GroupeForfaitsComponent,
    PrixComponent,
    FormulaireForfaitComponent,
    FormulaireAvisComponent,
    FormulaireContactComponent,
    FormulaireRechercheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
