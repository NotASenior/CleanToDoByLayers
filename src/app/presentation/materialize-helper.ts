declare var M;
declare var document;

export class MaterializeHelper {
  static showToast(message: string, callback = null) {
    const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);

    if (callback != null) {
      message = '<span>' + message + '</span><button id="' + id + '" class="pink-text text-accent-2 btn-flat toast-action">DESHACER</button>';
    }

    M.toast({html: message});

    if (callback != null) {
      MaterializeHelper.setToastUndoListenerById(id, callback);
    }
  }
  static setToastUndoListenerById(id: string, callback) {
    const undoElement = document.getElementById(id);
    if (undoElement != null) {
      undoElement.addEventListener('click', () => {
        callback();
        MaterializeHelper.dismissToasts();
        undoElement.removeEventListener('click');
      }, false);
    }
  }
  static dismissToasts() {
    const toastElement = document.querySelector('.toast');
    if (toastElement != null) {
      const toastInstance = M.Toast.getInstance(toastElement);
      if (toastInstance != null) {
        toastInstance.dismiss();
      }
    }
  }
  static initModal() {
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {});
  }
  static initFab() {
    const fab = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fab, {});
  }
  static initMaterialBoxed() {
    const images = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(images, {});
  }
  static initPrefilledInputs() {
    M.updateTextFields();
  }
  static initFeatureDiscovery() {
    const tapTargets = document.querySelectorAll('.tap-target');
    M.TapTarget.init(tapTargets, {});
  }
}
