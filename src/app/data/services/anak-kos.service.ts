import { Injectable } from "@angular/core";
import { AnakKos } from "../entities/AnakKos";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class AnakKosService {
  anakKos: AnakKos[] = [
    { _id: "qweqweqeq", nama: "Irfan", asal: "Malang", nohp: "082338819564" },
    { _id: "qweqweqeq", nama: "Irfan", asal: "Malang", nohp: "082338819564" },
    { _id: "qweqweqeq", nama: "Irfan", asal: "Malang", nohp: "082338819564" },
    { _id: "qweqweqeq", nama: "Irfan", asal: "Malang", nohp: "082338819564" },
    { _id: "qweqweqeq", nama: "Irfan", asal: "Malang", nohp: "082338819564" },
    { _id: "qweqweqeq", nama: "Irfan", asal: "Malang", nohp: "082338819564" },
    { _id: "qweqweqeq", nama: "Irfan", asal: "Malang", nohp: "082338819564" },
    { _id: "qweqweqeq", nama: "Irfan", asal: "Malang", nohp: "082338819564" },
  ];

  constructor(private httpClient: HttpClient) { }

  getAnakKos(): Observable<AnakKos[]> {
    return this.httpClient.get<AnakKos[]>('https://kosku-service.herokuapp.com/anakkos')
      .pipe(
        catchError(this.handleError<AnakKos[]>('getAnakKos', []))
      )
  }

  addAnakKos(id: string, nama: string, asal: string, nohp: string) {
    this.anakKos.push({ _id: id, nama: nama, nohp: nohp, asal: asal })
  }

  findAnakKos(id: string) {
    return this.httpClient.get<AnakKos>(`https://kosku-service.herokuapp.com/anakkos/${id}`)
      .pipe(
        catchError(this.handleError<AnakKos>('getAnakKos'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
