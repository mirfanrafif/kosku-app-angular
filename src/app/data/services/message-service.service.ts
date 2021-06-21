import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string[] = []

  constructor() { }

  getMessage(): Observable<string[]> {
    return of(this.message)
  }

  addMessage(data: string) {
    this.message.push(data)
  }
}
