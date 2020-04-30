import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-new-message-area',
  templateUrl: './chat-new-message-area.component.html',
  styleUrls: ['./chat-new-message-area.component.scss']
})
export class ChatNewMessageAreaComponent implements OnInit {

  @Output() sendButtonClicked: EventEmitter<string> = new EventEmitter();
  message: string = "";

  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    if (this.message) {
      this.sendButtonClicked.emit(this.message);
      this.message = "";
    }
  }

}
