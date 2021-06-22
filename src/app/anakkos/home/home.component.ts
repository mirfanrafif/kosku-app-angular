import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { AnakKos } from "../../data/entities/AnakKos";
import { AnakKosService } from "../../data/services/anak-kos.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  displayedColumn = ["id", "nama", "asal", "nohp"]
  title = "Kosku App"
  dataSource: MatTableDataSource<AnakKos>

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private anakKosService: AnakKosService) { }

  ngOnInit() {
    this.anakKosService.getAnakKos().subscribe((data) => {
      this.dataSource = new MatTableDataSource<AnakKos>(data)
      this.dataSource.paginator = this.paginator
    });
  }
}
