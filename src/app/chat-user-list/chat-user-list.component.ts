import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent implements OnInit {

  @Input() users: User[];
  @Output() userClicked: EventEmitter<User> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {

  }
}
