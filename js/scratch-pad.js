function catchSelected() {
    var range = document.createRange();
    range.selectNodeContents(document.getElementById('scratch-pad-textarea'));
    var selection = window.getSelection();
    selection.addRange(range);
}
//on click(scratch pad) show it's dialog
$('#scratch_pad').click(function () {
    $("#scratch-pad-dialog").dialog({
        width: 600,
        autoOpen: true,
        
    }).prev(".ui-dialog-titlebar").addClass("pencil_icon");
    $("#scratch-pad-dialog").css('display', 'block');
    tinymce.init({
        // General options
        selector : "#scratch-pad-textarea",
        toolbar: ' copy | cut | paste |pastetext | undo | redo ',
        menubar: false,
        statusbar: false,
        // content_css: "/css/scratchpad.css",
        setup: function(editor) {
           
            editor.on('init', function(e) {
              console.log('The Editor has initialized.');
            });
            editor.on('paste', function(e) {
                console.log('The Editor has paste.');
                const text =  navigator.clipboard.readText();
                console.log(text)
                document.getElementById("scratch-pad-textarea").value += text;
            });
            editor.on('copy', function(e) {
                console.log('The Editor has copy.');
                // catch selected
    catchSelected();
    // Copy
    document.execCommand("copy");
            });
          }
          
    });
      
});