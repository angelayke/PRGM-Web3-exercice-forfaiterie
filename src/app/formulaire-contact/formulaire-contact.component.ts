import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.css']
})
export class FormulaireContactComponent implements OnInit {
  contactForm = new FormGroup({
        prenom : new FormControl('', Validators.required),
        nom : new FormControl('', Validators.required),
        email : new FormControl('', Validators.required),
        tel : new FormControl(''),
        preference : new FormControl (''),
    
        //motif = new FormGroup({
        //  question = new FormControl('Question au sujet de ce forfait'),
        //  prix = new FormControl('Demande de prix'),
        //  remarque = new FormControl('Remarque à propos de ce forfait')
        //});
        message : new FormControl(''),
        //aboutUs = new FormGroup({
        //  social = new FormControl('Réseaux sociaux'),
        //  tv = new FormControl('Télévision'),
        //  journaux = new FormControl('Journeaux'),
        //  ami = new FormControl('Recommandé par un(e) ami(e), collègue, etc'),
        //  internet = new FormControl('Recherche internet (Google, Bing, etc)'),
        //  autre = new FormControl('')
        //})
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }

}
