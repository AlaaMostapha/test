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
        toolbar: ' copy | cut | paste | undo | redo ',
        menubar: false,
        statusbar: false,
        
    });
      
});