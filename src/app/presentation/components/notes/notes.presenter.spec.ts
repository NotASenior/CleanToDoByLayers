import { TestBed } from '@angular/core/testing';

import { NotesPresenterImpl } from './notes.presenter';

describe('NotesPresenterImpl', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesPresenterImpl = TestBed.get(NotesPresenterImpl);
    expect(service).toBeTruthy();
  });
});
