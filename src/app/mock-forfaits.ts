import { Forfait } from "./forfait";
import { AVIS } from "./mock-avis";
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
        avis: AVIS
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
        avis: AVIS
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
        avis: AVIS
      }
]