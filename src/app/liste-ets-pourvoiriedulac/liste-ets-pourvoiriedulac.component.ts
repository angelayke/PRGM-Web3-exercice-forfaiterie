import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-ets-pourvoiriedulac',
  templateUrl: './liste-ets-pourvoiriedulac.component.html',
  styleUrls: ['./liste-ets-pourvoiriedulac.component.css']
})
export class ListeEtsPourvoiriedulacComponent implements OnInit {
  forfaits = FORFAITS;
  showFiller = false;
  categorie = '';
  etablissement = '';
    
  constructor() { }

  ngOnInit(): void {
  }

}
