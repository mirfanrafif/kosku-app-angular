import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnakKos } from '../data/entities/AnakKos';
import { AnakKosService } from '../data/services/anak-kos.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  anakKos: AnakKos

  constructor(private anakKosService: AnakKosService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.findAnakKos(id)
  }

  findAnakKos(id: string) {
    this.anakKosService.findAnakKos(id).subscribe(it => {
      this.anakKos = it
    })
  }

  goBack() {
    this.location.back()
  }

}
