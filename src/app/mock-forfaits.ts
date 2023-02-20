import { Forfait } from "./forfait";
import { ETABLISSEMENTS } from "./mock-etablissements";

// LES CATEGORIES forfaiterie
// Hébergement, Détente, Restauration, Activités.

// GO FORFAITS 
// Nouveautés, Restaurants & terroir, Microbrasseries, Sports & aventure, Arts & spectacles, Détente & spas, 
// Découvertes & initiations, Séjours & escapades, Romantique

// TUANGO
// Hôtels, Activités, Détente, Restaurant et Alimentation

// SHIPICO.CA
// Activités / Divertissement (13), Automobile / Mécanique (5), Divers (3), Hôtel / Hébergement (1), 
// Maison (6), Mode (2), Nouveautés / Offres populaires (2), Restaurant / Nourriture (30), Santé / Sport / Fitness (7), Spa / Beauté (7)

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
        premium: true,
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
        premium: false,
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
        categories:['Restauration', 'Détente', 'Activités'],
        etablissement: ETABLISSEMENTS[2],
        dateDebut: '2022-11-14',
        dateFin: '2022-11-21',
        prix: 239,
        nouveauprix: 199,
        premium: false,
        avis: [
          {note:2, commentaires:'Commentaire sur le forfait machin'},
          {note: 4, commentaires: 'Commentaire sur le forfait machin'},
          {note: 1, commentaires: 'Commentaire sur le forfait activité'}
      ]
      },

      {
        nom: 'Forfait Noël',
        description: 'Description Noel ....',
        code: 'AAA005',
        categories:['Hébergement', 'Restauration', 'Activités'],
        etablissement: ETABLISSEMENTS[1],
        dateDebut: '2022-12-24',
        dateFin: '2022-12-26',
        prix: 249,
        premium: true,
        avis: [
            {note: 8, commentaires:'Commentaire sur le forfait machin'},
            {note: 7, commentaires: 'Commentaire sur le forfait Trucmuche'},
        ]
      },
    
      {
        nom: 'Forfait Husky',
        description: 'Chien de traineau ....',
        code: 'AAA005',
        categories:['Activités'],
        etablissement: ETABLISSEMENTS[2],
        dateDebut: '2022-11-17',
        dateFin: '2022-11-20',
        prix: 99,
        nouveauprix: 59,
        premium: true,
        avis: [
          {note:7, commentaires:'Commentaire sur le forfait husky'},
      ]
      },

      {
        nom: 'Forfait Route des vins',
        description: 'Description Routes des vins, dégustations, parcours de quelques vignobles, 2 nuits dans un des vignobles ....',
        code: 'AAA006',
        categories:['Hébergement', 'Restauration', 'Activités'],
        etablissement: ETABLISSEMENTS[0],
        dateDebut: '2023-06-16',
        dateFin: '2023-06-19',
        prix: 699,
        premium: true,
        avis: [
            {note: 8, commentaires:'Commentaire sur le forfait RDV'},
            {note: 9, commentaires: 'Commentaire sur le forfait Rte des vins'},
        ]
      },
    
      {
        nom: 'Forfait St-valentin',
        description: 'Profitez d une belle soirée à deux pour déguster notre table dhôte de 5 services, Souper sur bateau mouche pour 2 personnes ....',
        code: 'AAA007',
        categories:[ 'Restauration, Activités'],        
        etablissement: ETABLISSEMENTS[2],
        dateDebut: '2023-02-14',
        dateFin: '2023-02-15',
        prix: 149,
        premium: false,
        avis: [
          {note:7, commentaires:'Commentaire sur le forfait St-Valentin'},
      ]
      }
]