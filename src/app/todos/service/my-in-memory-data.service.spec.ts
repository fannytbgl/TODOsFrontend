import { TestBed } from '@angular/core/testing';

import { MyInMemoryDataService } from './my-in-memory-data.service';

describe('MyInMemoryDataService', () => {
  let service: MyInMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
