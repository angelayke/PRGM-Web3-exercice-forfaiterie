import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-ets-hotelwhynot',
  templateUrl: './liste-ets-hotelwhynot.component.html',
  styleUrls: ['./liste-ets-hotelwhynot.component.css']
})
export class ListeEtsHotelwhynotComponent implements OnInit {
  forfaits = FORFAITS;
  showFiller = false;
  categorie = '';
  etablissement = '';
    
  constructor() { }

  ngOnInit(): void {
  }

}
