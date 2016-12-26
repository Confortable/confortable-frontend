/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestService, SocketService } from './feathers.service';

describe('RestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestService]
    });
  });

  it('should ...', inject([RestService], (service: RestService) => {
    expect(service).toBeTruthy();
  }));
});

describe('SocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketService]
    });
  });

  it('should ...', inject([SocketService], (service: SocketService) => {
    expect(service).toBeTruthy();
  }));
});
