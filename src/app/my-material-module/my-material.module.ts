import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatTable, MatTableModule, MatToolbarModule } from '@angular/material';

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
    MatIconModule
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
    MatIconModule
  ]
})
export class MyMaterialModule { }
