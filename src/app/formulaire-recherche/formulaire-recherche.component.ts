import { KeyValue } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css']
})
export class FormulaireRechercheComponent implements OnInit {
  @Input() forfait?: string;
  //categorie
  @Input() categorie: string ='';
  @Output() categorieChange = new EventEmitter();
  change() { // valeur?
    this.categorieChange.emit(this.categorie); //nouvelle valeur?
  }

  //etablissement
 @Input() etablissement: string = '';
 @Output() etablissementChange = new EventEmitter();
  changeEts() { 
    this.etablissementChange.emit(this.etablissement); 
  }

  isChecked = true;
  
 
  constructor() { }

  ngOnInit(): void {
  }

}
