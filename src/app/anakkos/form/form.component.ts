import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AnakKos } from '../../data/entities/AnakKos';
import { AnakKosService } from '../../data/services/anak-kos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() anakKos: AnakKos

  constructor(private anakKosService: AnakKosService, private location: Location) { }

  ngOnInit() {
  }

  save(nama: string, asal: string, nomorhp: string) {
    if (this.anakKos != null) {
      this.anakKosService.updateAnakKos(nama, asal, nomorhp, this.anakKos.id).subscribe(data => {
        console.log(data)
      })
    } else {
      this.anakKosService.addAnakKos(nama, asal, nomorhp).subscribe(data => {
        console.log(data)
      })
    }
    this.goBack()
  }

  hapus() {
    this.anakKosService.deleteAnakKos(this.anakKos.id).subscribe(data => {
      console.log(data)
      this.goBack()
    })
  }



  goBack() {
    this.location.back()
  }

}
