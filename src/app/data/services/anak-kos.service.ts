import { Injectable } from "@angular/core";
import { AnakKos } from "../entities/AnakKos";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AnakKosService {
  anakKos: AnakKos[] = [
    { id: "qweqweqeq", nama: "Irfan" },
    { id: "qweqweqeq", nama: "Irfan" },
    { id: "qweqweqeq", nama: "Irfan" },
    { id: "qweqweqeq", nama: "Irfan" },
    { id: "qweqweqeq", nama: "Irfan" },
    { id: "qweqweqeq", nama: "Irfan" },
    { id: "qweqweqeq", nama: "Irfan" },
    { id: "qweqweqeq", nama: "Irfan" },
  ];

  constructor() { }

  getAnakKos(): Observable<AnakKos[]> {
    return of(this.anakKos);
  }

  addAnakKos(id: string, nama: string) {
    this.anakKos.push({ id: id, nama: nama })
  }
}
