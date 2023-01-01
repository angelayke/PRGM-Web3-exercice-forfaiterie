import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-ets-hoteldeglace',
  templateUrl: './liste-ets-hoteldeglace.component.html',
  styleUrls: ['./liste-ets-hoteldeglace.component.css']
})
export class ListeEtsHoteldeglaceComponent implements OnInit {
  forfaits = FORFAITS;
  showFiller = false;
  categorie = '';
  etablissement = '';

  constructor() { }

  ngOnInit(): void {
  }

}
