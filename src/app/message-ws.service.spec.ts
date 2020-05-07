import { TestBed } from '@angular/core/testing';

import { MessageWsService } from './message-ws.service';

describe('MessageWsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageWsService = TestBed.get(MessageWsService);
    expect(service).toBeTruthy();
  });
});
