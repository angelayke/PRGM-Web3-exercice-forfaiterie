import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Etablissement } from '../etablissement';

@Component({
  selector: 'app-groupe-forfaits',
  templateUrl: './groupe-forfaits.component.html',
  styleUrls: ['./groupe-forfaits.component.css']
})
export class GroupeForfaitsComponent implements OnInit {
  @Input() forfait?: Forfait;
  @Input() etablissement?: Etablissement;

  constructor() { }

  ngOnInit(): void {
  }

}
