import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNewMessageAreaComponent } from './chat-new-message-area.component';

describe('ChatNewMessageAreaComponent', () => {
  let component: ChatNewMessageAreaComponent;
  let fixture: ComponentFixture<ChatNewMessageAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNewMessageAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNewMessageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
