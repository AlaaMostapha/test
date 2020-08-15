$('#help').click(function() {
    $("#help_dialog").dialog({
        width: 683,
        autoOpen: true,
        resizable: true,
        dialogClass: 'help-dialog',
        classes: {
            "ui-dialog-titlebar":"question-icon",
        },
        open: function() {
            $( "#tabs" ).tabs();
          }
    });
    $("#help_dialog").css('display', 'block');

});

