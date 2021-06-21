import { Injectable } from "@angular/core";
import { AnakKos } from "../entities/AnakKos";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from "./message-service.service";
import { AuthService } from "./auth-service.service";

@Injectable({
  providedIn: "root",
})
export class AnakKosService {

  getHeader() {
    var token = `Bearer: ${this.authService.getToken()}`
    var httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':  token})
    };
    return httpOptions;
  }

  baseUrl: string = "http://localhost:6001"


  constructor(private httpClient: HttpClient, private messageService: MessageService, private authService: AuthService) { }

  getAnakKos(): Observable<AnakKos[]> {
    return this.httpClient.get<AnakKos[]>(this.baseUrl + '/anakkos')
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
    return this.httpClient.post<AnakKos>(this.baseUrl + '/anakkos', request, this.getHeader())
      .pipe(
        tap((data: AnakKos) => console.log(`added hero w/ id=${data.id}`)),
        catchError(this.handleError<AnakKos>('getAnakKos'))
      )
  }

  updateAnakKos(nama: string, asal: string, nohp: string, id: number) {
    var anakKos = {
      nama: nama,
      asal: asal,
      nohp: nohp
    };
    var request = JSON.stringify(anakKos)
    console.log(request)
    return this.httpClient.put<AnakKos>(`${this.baseUrl}/anakkos/${id}`, request, this.getHeader())
      .pipe(
        tap((data: AnakKos) => console.log(`added hero w/ id=${data.id}`)),
        catchError(this.handleError<AnakKos>('getAnakKos'))
      )
  }

  deleteAnakKos(id: number) {
    return this.httpClient.delete<AnakKos>(`${this.baseUrl}/anakkos/${id}`)
      .pipe(
        catchError(this.handleError<AnakKos>('getAnakKos'))
      )
  }

  findAnakKos(id: string) {
    return this.httpClient.get<AnakKos>(`${this.baseUrl}/anakkos/${id}`)
      .pipe(
        catchError(this.handleError<AnakKos>('getAnakKos'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      this.messageService.addMessage(error.statusText)

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
