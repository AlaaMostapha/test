$(document).ready(function(){
  var textarea = document.querySelector("#scratch-pad-textarea");
  // Require the library function
  const txtHistory = window.UndoRedojs(5);
  // Get the textarea
  // Add event listener for inputs on the textarea
  textarea.addEventListener('input', () => { 
    // Check if the new textarea value is different
    if (txtHistory.current() !== textarea.value) {
      // Check for pastes, auto corrects..
      if ((textarea.value.length - txtHistory.current().length) > 1 || (textarea.value.length - txtHistory.current().length) < -1 || (textarea.value.length - txtHistory.current().length) === 0) {
        // Record the textarea value and force to bypass cooldown
        txtHistory.record(textarea.value, true);
      // Check for single key press, single chacacter paste..
      } else {
        // Record the textarea value
        txtHistory.record(textarea.value);
      }
    }
  });
   // Some browsers will auto-fill the textarea again after reloading, this will deal with that
   setTimeout(() => {
    if (textarea.value) txtHistory.record(textarea.value, true);
  }, 50);
 
 
  // The undo button
  document.querySelector("#undo").addEventListener('click', () => {
     
    if (txtHistory.undo(true) !== undefined) {
      textarea.value = txtHistory.undo();
    }
  });
  // The redo button
  document.querySelector("#redo").addEventListener('click', () => {
    if (txtHistory.redo(true) !== undefined) {
      textarea.value = txtHistory.redo();
    }
  });
 })