import { Component, OnInit } from "@angular/core";
import { AnakKos } from "../data/entities/AnakKos";
import { AnakKosService } from "../data/services/anak-kos.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  anakKos: AnakKos[] = [];
  displayedColumn = ["id", "nama", "asal", "nohp"]

  constructor(private anakKosService: AnakKosService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.anakKosService.getAnakKos().subscribe((data) => {
      this.anakKos = data;
    });
  }
}
