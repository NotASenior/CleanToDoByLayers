declare var M;

export class MaterializeHelper {
  static showToast(message: string) {
    M.toast({html: message});
  }
  static initModal() {
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {});
  }
  static initFab() {
    const fab = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fab, {});
  }
  static initPrefilledInputs() {
    M.updateTextFields();
  }
}
