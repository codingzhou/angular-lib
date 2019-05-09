import { TestBed } from '@angular/core/testing';

import { AngularLibService } from './angular-lib.service';

describe('AngularLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularLibService = TestBed.get(AngularLibService);
    expect(service).toBeTruthy();
  });
});
