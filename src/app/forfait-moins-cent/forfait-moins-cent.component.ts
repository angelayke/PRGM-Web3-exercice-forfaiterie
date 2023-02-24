import { Component,  OnInit } from '@angular/core'; //Input,
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-forfait-moins-cent',
  templateUrl: './forfait-moins-cent.component.html',
  styleUrls: ['./forfait-moins-cent.component.css']
})
export class ForfaitMoinsCentComponent implements OnInit {

 forfaits : Forfait[] = []; // FORFAITS;

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
}
