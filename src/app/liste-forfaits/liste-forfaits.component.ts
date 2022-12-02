import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { ETABLISSEMENTS } from '../mock-etablissements';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  forfaits = FORFAITS;
  showFiller = false;
  categorie = '';
  etablissement = '';
    
  constructor() { }

  ngOnInit(): void {
  }

}
