import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-avis',
  templateUrl: './formulaire-avis.component.html',
  styleUrls: ['./formulaire-avis.component.css']
})
export class FormulaireAvisComponent implements OnInit {
  formatLabel(value: number) {
    if (value >= 10) {
      return Math.round(value / 10);
    }

    return value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
