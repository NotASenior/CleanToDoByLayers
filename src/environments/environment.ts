// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {NoteMapper} from '../app/presentation/mapper/note-mapper';
import {NoteMockRepository} from '../app/data/repository/mock/note-mock-repository.service';
import {NoteValidator} from '../app/presentation/validator/note-validator';

export const environment = {
  production: false,
  name: 'Dev',
  noteMapper: new NoteMapper(),
  noteValidator: new NoteValidator(),
  noteRepository: new NoteMockRepository(),
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
