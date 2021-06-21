import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MessageService } from '../data/services/message-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService, private matSnackbar: MatSnackBar) { }

  messages: string[] = []

  ngOnInit() {
    this.messageService.getMessage().subscribe(data => {
      this.messages = data
    })
  }



}
