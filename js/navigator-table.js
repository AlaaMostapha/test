// $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
//     _title: function(title) {
//         if (!this.options.title ) {
//             title.html("&#160;");
//         } else {
//             title.html(this.options.title);
//         }
//     }
// }));
$('#navigator_btn').click(function() {
        $("#navigator").dialog({
            width: 683,
            autoOpen: true,
            // title: "Navigator <span>- select a question to go to it</span>",
            classes: {
                "ui-dialog-content": "custom-navig-dialog",
                "ui-dialog":"ui-dialog-navig",
                "ui-dialog-titlebar":"block-icon",
                "ui-button-icon":"ui-button-icon-restyle"
            },
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
        });
        $("#navigator").css('display', 'block');
    
  });


   