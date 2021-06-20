import { Injectable } from "@angular/core";
import { AnakKos } from "../entities/AnakKos";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from "./message-service.service";

@Injectable({
  providedIn: "root",
})
export class AnakKosService {

  getHeader(token: string) {
    var httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer: ${token}` })
    };
    return httpOptions;
  }

  baseUrl: string = "http://localhost:6001"


  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

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
    return this.httpClient.post<AnakKos>(this.baseUrl + '/anakkos', request, this.getHeader('eyJhbGciOiJSUzI1NiIsImtpZCI6IjhDN0FGMkY4MkIwQjEzOUQ2M0NCNjhBMzdGMzNDNEJBIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MjQxMDAzNTAsImV4cCI6MTYyNDEwMzk1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSIsImNsaWVudF9pZCI6ImNsaWVudCIsImp0aSI6IjkzQzczMTcxODU5QUUxRjgxMDNDQTU5RkFFMDREOTYwIiwiaWF0IjoxNjI0MTAwMzUwLCJzY29wZSI6WyJhcGkxIl19.Lrz1ul1FW5cwL2RxgUiDMzvnZ3fr5c-T6NNu8rihPwa3OO0JGln3T33Q3Mj8pCodUkm9nOZBwaSKhSGOo0ZxBvhC3k2LwIcKNcHd_73WcC91I8iJ4tqKeOCF6gin3xVaCnIyz4YKYxsRzvOIDF8bndStF0jONWnXFuy-SLxFGC34FjS-qSvsgjJuA3_jlEuYwMzaH49Sf3ibVIlMXxl5RFVPpjCQyCeqjikGecRtTdbzvsKD55oex5dqC_5ll7KuXE6POoH0MpKWIP0rWAD1CAAylOUA8GTWxG7NDpfuGpzr6-SZP4YNgEC4cC5Ejg8OeTUjPFvxJ9cW8KVtfdo_Vw'))
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
    return this.httpClient.put<AnakKos>(`${this.baseUrl}/anakkos/${id}`, request, this.getHeader('hello'))
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
