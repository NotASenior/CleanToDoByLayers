import {Note} from '../entity/note';
import {Creatable} from './creatable';
import {Readable} from './readable';
import {Updatable} from './updatable';
import {Deletable} from './deletable';

export interface NoteRepository extends Creatable<Note>, Readable<Note>, Updatable<Note>, Deletable<Note> {
}
