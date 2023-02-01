import { TestBed } from '@angular/core/testing';

import { HttpcallsService } from './http.service';

describe('HttpcallsService', () => {
  let service: HttpcallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpcallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
