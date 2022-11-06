import { Forfait } from "./forfait";
import { ETABLISSEMENTS } from "./mock-etablissements";

export const FORFAITS: Forfait[] = [
      {
        nom: 'Forfait Trucmuche',
        description: 'Description trucmuche ....',
        code: 'AAA001',
        categories:['Hébergement', 'Détente'],
        etablissement: ETABLISSEMENTS[0],
        dateDebut: '2022-10-18',
        dateFin: '2022-10-21',
        prix: 149,
        nouveauprix: 119,
        avis: [
          {note: 9, commentaires:'Commentaire sur le forfait machin'},
          {note: 7, commentaires: 'Commentaire sur le forfait Trucmuche'},
          {note: 6, commentaires: 'Commentaire sur le forfait machin'},
          {note: 5, commentaires: 'Commentaire sur le forfait activité'}
      ]
      },
    
      {
        nom: 'Forfait Machin',
        description: 'Description machin ....',
        code: 'AAA002',
        categories:['Hébergement', 'Restauration'],
        etablissement: ETABLISSEMENTS[1],
        dateDebut: '2022-10-31',
        dateFin: '2022-11-02',
        prix: 99,
        nouveauprix: 79,
        avis: [
            {note: 8, commentaires:'Commentaire sur le forfait machin'},
            {note: 7, commentaires: 'Commentaire sur le forfait Trucmuche'},
            {note: 6, commentaires: 'Commentaire sur le forfait activité'}
        ]
      },
    
      {
        nom: 'Forfait Activité',
        description: 'Description Activité ....',
        code: 'AAA003',
        categories:['Restauration', 'Détente', 'Activités extérieures'],
        etablissement: ETABLISSEMENTS[2],
        dateDebut: '2022-11-14',
        dateFin: '2022-11-21',
        prix: 239,
        nouveauprix: 199,
        avis: [
          {note:2, commentaires:'Commentaire sur le forfait machin'},
          {note: 4, commentaires: 'Commentaire sur le forfait machin'},
          {note: 1, commentaires: 'Commentaire sur le forfait activité'}
      ]
      }
]