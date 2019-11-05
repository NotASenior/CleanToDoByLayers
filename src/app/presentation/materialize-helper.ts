declare var M;

export class MaterializeHelper {
  static initModal() {
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {});
  }
  static initFab() {
    const fab = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fab, {});
  }
}
