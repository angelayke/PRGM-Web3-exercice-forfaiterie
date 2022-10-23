import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  forfait1: Forfait = {
    nom: 'Forfait Trucmuche',
    description: 'Description trucmuche ....',
    code: 'AAA001',
    categories:['Hébergement', 'Détente'],
    etablissement: {
      nomEtablissement: 'Hotel WhyNot',
      adresse: '10 rue des Impasses',
      ville: 'Perdue',
      telephone: 5144567896,
      courriel: 'info@hotelwhynot.com',
      //siteWeb?: string,
      description: 'hotel bord du marais'
    },
    dateDebut: '2022-10-18',
    dateFin: '2022-10-21',
    prix: 149,
    avis: [] = [ {note: 7, commentaires: 'Commentaire sur le forfait Trucmuche'} ]
  }

  forfait2: Forfait = {
    nom: 'Forfait Machin',
    description: 'Description machin ....',
    code: 'AAA002',
    categories:['Hébergement', 'Restauration'],
    etablissement: {
      nomEtablissement: 'Hotel WhyNot',
      adresse: '10 rue des Impasses',
      ville: 'Perdue',
      telephone: 5144567896,
      courriel: 'info@hotelwhynot.com',
      //siteWeb?: string,
      description: 'hotel bord du marais avec dégustation'
    },
    dateDebut: '2022-10-31',
    dateFin: '2022-11-02',
    prix: 99,
    avis: [] = [ {note: 8, commentaires: 'Commentaire sur le forfait machin'} ]
  }

  forfait3: Forfait = {
    nom: 'Forfait Activité',
    description: 'Description Activité ....',
    code: 'AAA003',
    categories:['Restauration', 'Détente', 'Activités extérieures'],
    etablissement: {
      nomEtablissement: 'Pourvoirie du Lac',
      adresse: '20 rue de la Forêt',
      ville: 'Saint-GlinGlin',
      telephone: 4384567896,
      courriel: 'info@lacglinglin.com',
      siteWeb: 'www.pourvoiriedulac.com',
      description: 'Restaurant, SPA et activités'
    },
    dateDebut: '2022-11-14',
    dateFin: '2022-11-21',
    prix: 239,
    avis: [] = [ {note: 8, commentaires: 'Commentaire sur le forfait machin'} ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
