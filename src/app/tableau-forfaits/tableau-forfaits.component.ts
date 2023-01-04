
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-tableau-forfaits',
  templateUrl: './tableau-forfaits.component.html',
  styleUrls: ['./tableau-forfaits.component.css']
})
export class TableauForfaitsComponent implements OnInit {
  // 'nom', 'description', 'code', 'categories', 'etablissement', 'dateDebut', 'dateFin', 'prix',  'nouveauprix', 'avis', 'premium', 'color'
  //'position', 'name', 'weight', 'symbol'

  displayedColumns: string[] = ['code', 'nom', 'categories', 'etablissement', 'dateDebut', 'dateFin', 'prix',  'nouveauprix', 'premium'];
  dataSource = new MatTableDataSource(FORFAITS);
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}

