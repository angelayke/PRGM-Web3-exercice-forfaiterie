import { Component, OnInit } from '@angular/core';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faPoop } from '@fortawesome/free-solid-svg-icons';


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

  faFaceSmile = faFaceSmile;
  faPoop = faPoop;

  constructor() { }

  ngOnInit(): void {
  }

}
