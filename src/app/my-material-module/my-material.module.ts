import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatPaginator, MatPaginatorModule, MatSidenavModule, MatSnackBarModule, MatTable, MatTableModule, MatToolbarModule, MatTreeModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTreeModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTreeModule
  ]
})
export class MyMaterialModule { }
