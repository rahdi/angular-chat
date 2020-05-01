import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.sass']
})
export class ChatMessageListComponent implements OnInit {

  @Input() messages:Message[] = [];
  @Input() myId:number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
