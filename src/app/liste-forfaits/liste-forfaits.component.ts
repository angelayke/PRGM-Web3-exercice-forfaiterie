import { Component, OnInit } from '@angular/core';
//import { FORFAITS } from '../mock-forfaits';
//import { ETABLISSEMENTS } from '../mock-etablissements';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  forfaits : Forfait[] = []; // FORFAITS;
  showFiller = false;
  categorie = '';
  etablissement = '';
  
    
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
}
