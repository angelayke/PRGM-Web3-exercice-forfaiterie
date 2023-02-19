import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})

export class FormulaireForfaitComponent implements OnInit {
  @Output() forfaitAjoute = new EventEmitter();// pour rafraichir le tableau apres l'ajout
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  forfait: Forfait = {
    nom: '',
    description: '',
    code: '',
    categories: [],
    dateDebut: '',
    dateFin: '',
    prix: 0,
    avis: []
  }

  constructor(private forfaitService: ForfaitService, public dialogRef: MatDialogRef<FormulaireForfaitComponent>, @Inject(MAT_DIALOG_DATA) public data: Forfait) {
    if (data) {
      this.forfait = data;
    }
   }

  ngOnInit(): void {
    this.forfaitService.getForfaits().subscribe(
      resultat => {
       // this.dataSourceForfaits = new MatTableDataSource(resultat);
      }
    );
  }

  addForfait(forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
      this.forfaitService.addForfait(this.forfait).subscribe(
        _ => {
          forfaitFormAjout.resetForm();
         // this.forfaitAjoute.emit();
          this.dialogRef.close("Forfait ajouté");
        }
      );
    }
  }

  // updateForfait(forfaitFormAjout: NgForm) {
  //   if (forfaitFormAjout.valid) {
  //     this.forfaitService.updateForfait(this.forfait).subscribe(
  //     _ => {
  //       forfaitFormAjout.resetForm();
  //       this.dialogRef.close("Forfait modifié");
  //       }
  //     );
  //   }
  // }

  annuler() {
    this.dialogRef.close();
    }
}
