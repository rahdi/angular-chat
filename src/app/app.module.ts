import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatUserListComponent } from './chat-user-list/chat-user-list.component';
import { ChatNewMessageAreaComponent } from './chat-new-message-area/chat-new-message-area.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    RegisterComponent,
    LoginComponent,
    ChatUserListComponent,
    ChatNewMessageAreaComponent,
    ChatMessageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
