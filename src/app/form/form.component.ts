import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnakKosService } from '../data/services/anak-kos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private anakKosService: AnakKosService, private location: Location) { }

  ngOnInit() {
  }

  addData(nama: string, asal: string, nomorhp: string) {
    this.anakKosService.addAnakKos(nama, asal, nomorhp)
    // this.goBack()
  }

  goBack() {
    this.location.back()
  }

}
