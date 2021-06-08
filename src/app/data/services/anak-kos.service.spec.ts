import { TestBed } from '@angular/core/testing';

import { AnakKosService } from './anak-kos.service';

describe('AnakKosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnakKosService = TestBed.get(AnakKosService);
    expect(service).toBeTruthy();
  });
});
