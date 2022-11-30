import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.css']
})
export class FormulaireContactComponent implements OnInit {
  name = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

}
