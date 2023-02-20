import {AfterViewInit,Component, OnInit, ViewChild} from '@angular/core';
import {Forfait} from '../forfait';
import {ForfaitService} from '../forfait.service';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormulaireForfaitComponent } from '../formulaire-forfait/formulaire-forfait.component';

import {FORFAITS} from '../mock-forfaits';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tableau-forfaits',
  templateUrl: './tableau-forfaits.component.html',
  styleUrls: ['./tableau-forfaits.component.css']
})
export class TableauForfaitsComponent implements OnInit {
  // 'nom', 'description', 'code', 'categories', 'etablissement', 'dateDebut', 'dateFin', 'prix',  'nouveauprix', 'avis', 'premium', 'color'
  //'position', 'name', 'weight', 'symbol'
  dataSourceForfaits: MatTableDataSource < Forfait > = new MatTableDataSource(); 
  columnsToDisplay = ['code', 'nom', 'categories', 'etablissement', 'dateDebut', 'dateFin', 'prix', 'nouveauprix', 'premium', 'actions'];
 
  displayedColumns: string[] = ['code', 'nom', 'categories', 'etablissement', 'dateDebut', 'dateFin', 'prix', 'nouveauprix', 'premium'];
  dataSource = new MatTableDataSource < Forfait > (FORFAITS);

  forfait: Forfait = {
    code: '',
    nom: '',
    categories: [],
    description: '',
    dateDebut: '',
    dateFin: '',
    prix: 0,
    nouveauprix: 0,
    avis: [], 
    etablissement : {
      nomEtablissement:''
    }
  }
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private forfaitService: ForfaitService, private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //throw new Error('Method not implemented.');
  }

  //ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
  //  this.dataSource.sort = this.sort;
 // }


  ngOnInit(): void {
    this.forfaitService.getForfaits().subscribe(
      resultat => {
        this.dataSourceForfaits = new MatTableDataSource(resultat);
        this.dataSourceForfaits.paginator = this.paginator;
        this.dataSourceForfaits.sort = this.sort;
      }
    );
  }

  getForfaits() { 
    this.forfaitService.getForfaits().subscribe(
      resultat => {
        console.log(resultat);
        this.dataSourceForfaits = new MatTableDataSource(resultat);
        this.dataSourceForfaits.paginator = this.paginator;
        this.dataSourceForfaits.sort = this.sort;
      }
    );
  }

  openDialog(forfait?: Forfait) {
    console.log(forfait);
    const dialogRef = this.dialog.open(FormulaireForfaitComponent, {
      data: forfait,
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialog du formulaire de forfait a été fermé');
      this._snackBar.open(result, undefined, {
        duration: 2000
      });
      this.getForfaits();
      });
    }

  //ceci devrait disparaitre avec le ngForm
  addForfait(forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
      this.forfaitService.addForfait(this.forfait).subscribe(
        _ => {
          forfaitFormAjout.resetForm();
          this.getForfaits();
        }
      );
    }
  }

  deleteForfait(id: string) {
    this.forfaitService.deleteForfait(id).subscribe(
      _ => {
        this.getForfaits();
        this._snackBar.open("Forfait supprimé!", undefined, {
          duration: 2000
        });
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForfaits.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceForfaits.paginator) {
      this.dataSourceForfaits.paginator.firstPage();
    }
  }

}

//function ViewChild(MatPaginator: typeof MatPaginator): (target: TableauForfaitsComponent, propertyKey: "paginator") => void {
 // throw new Error('Function not implemented.');
//}

