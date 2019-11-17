import {AddNoteInteractor} from '../domain/usecase/add-note/add-note-interactor';
import {EditNoteInteractor} from '../domain/usecase/edit-note/edit-note-interactor';
import {GetNoteInteractor} from '../domain/usecase/get-note/get-note-interactor';
import {GetNotesInteractor} from '../domain/usecase/get-notes/get-notes-interactor';
import {DeleteNoteInteractor} from '../domain/usecase/delete-note/delete-note-interactor';

export class InteractorFactory {
  private static addNoteInteractor: AddNoteInteractor;
  private static getNoteInteractor: GetNoteInteractor;
  private static getNotesInteractor: GetNotesInteractor;
  private static editNoteInteractor: EditNoteInteractor;
  private static deleteNoteInteractor: DeleteNoteInteractor;

  public static getAddNoteInteractor(): AddNoteInteractor {
    if (!this.addNoteInteractor) {
      this.addNoteInteractor = new AddNoteInteractor();
    }

    return this.addNoteInteractor;
  }

  public static getGetNoteInteractor(): GetNoteInteractor {
    if (!this.getNoteInteractor) {
      this.getNoteInteractor = new GetNoteInteractor();
    }

    return this.getNoteInteractor;
  }

  public static getGetNotesInteractor(): GetNotesInteractor {
    if (!this.getNotesInteractor) {
      this.getNotesInteractor = new GetNotesInteractor();
    }

    return this.getNotesInteractor;
  }

  public static getEditNoteInteractor(): EditNoteInteractor {
    if (!this.editNoteInteractor) {
      this.editNoteInteractor = new EditNoteInteractor();
    }

    return this.editNoteInteractor;
  }

  public static getDeleteNoteInteractor(): DeleteNoteInteractor {
    if (!this.deleteNoteInteractor) {
      this.deleteNoteInteractor = new DeleteNoteInteractor();
    }

    return this.deleteNoteInteractor;
  }
}
