import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Etablissement } from '../etablissement';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent implements OnInit {
  @Input() forfait?: Forfait;
  @Input() etablissement?: Etablissement;

  constructor() { }

  ngOnInit(): void {
  }

}
