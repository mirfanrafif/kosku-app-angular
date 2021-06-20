import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldControl, MatFormFieldModule, MatInputModule, MatListModule, MatSidenavModule, MatTable, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ]
})
export class MyMaterialModule { }
