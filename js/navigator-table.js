
$('#navigator_btn').click(function() {
        $("#navigator").dialog({
            width: 600,
            autoOpen: true,
            buttons: [
                {
                    text: "Close",
                    "class": 'cancelButtonClass',
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
        });
        $("#navigator").css('display', 'block');
    
  });


   