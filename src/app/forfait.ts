import { Etablissement } from "./etablissement";
import { Avis } from "./avis";

export interface Forfait {
    id?: number;
    nom: string;
    description: string;
    code: string;
    categories: string[];
    etablissement: Etablissement;
    dateDebut: string;
    dateFin: string; 
    prix: number;
    nouveauprix?: number;
    avis: Avis[];
    premium?: boolean;
    //color?: string;
    //economie?: number;
}
