import { Injectable } from "@angular/core";
import { AnakKos } from "../entities/AnakKos";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getAnakKos(): Observable<AnakKos[]> {
    return this.httpClient.get<AnakKos[]>('https://kosku-service.herokuapp.com/anakkos')
      .pipe(
        catchError(this.handleError<AnakKos[]>('getAnakKos', []))
      )
  }

  addAnakKos(nama: string, asal: string, nohp: string) {
    var anakKos = {
      nama: nama,
      asal: asal,
      nohp: nohp
    };
    var request = JSON.stringify(anakKos)
    console.log(request)
    return this.httpClient.post<AnakKos>('https://kosku-service.herokuapp.com/anakkos', request, this.httpOptions)
      .pipe(
        tap((data: AnakKos) => console.log(`added hero w/ id=${data._id}`)),
        catchError(this.handleError<AnakKos>('getAnakKos'))
      )
  }

  updateAnakKos(nama: string, asal: string, nohp: string, id: string) {
    var anakKos = {
      nama: nama,
      asal: asal,
      nohp: nohp
    };
    var request = JSON.stringify(anakKos)
    console.log(request)
    return this.httpClient.put<AnakKos>(`https://kosku-service.herokuapp.com/anakkos/${id}`, request, this.httpOptions)
      .pipe(
        tap((data: AnakKos) => console.log(`added hero w/ id=${data._id}`)),
        catchError(this.handleError<AnakKos>('getAnakKos'))
      )
  }

  deleteAnakKos(id: string) {
    return this.httpClient.delete<AnakKos>(`https://kosku-service.herokuapp.com/anakkos/${id}`)
      .pipe(
        catchError(this.handleError<AnakKos>('getAnakKos'))
      )
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
