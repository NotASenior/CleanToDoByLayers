import { TestBed } from '@angular/core/testing';

import { NoteMockRepository } from './note-mock-repository.service';

describe('NoteMockRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteMockRepository = TestBed.get(NoteMockRepository);
    expect(service).toBeTruthy();
  });
});
