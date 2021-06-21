import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnakKosRouterModule } from './anakkos-router.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { AuthService } from '../data/services/auth-service.service';
import { AnakKosService } from '../data/services/anak-kos.service';
import { MyMaterialModule } from '../my-material-module/my-material.module';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    FormComponent
  ],
  providers: [
    AuthService,
    AnakKosService
  ],
  imports: [
    CommonModule,
    AnakKosRouterModule,
    MyMaterialModule
  ]
})
export class AnakkosModule { }
