import { Pipe, PipeTransform } from '@angular/core';
import { Etablissement } from './etablissement';


@Pipe({
  name: 'etablissement'
})
export class EtablissementPipe implements PipeTransform {

  transform(etablissements: Etablissement[]): Etablissement {
    return etablissement.filter(etablissement => etablissement.nomEtablissement == 'Hotel Whynot');
  }

}
