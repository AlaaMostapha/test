//check if page has a scrollbar or not and if check if user has scroll all page or not


$('#next_btn').click(function() {
    if($(window).scrollTop() + $(window).height() !== $(document).height()) {
        $("#unseen_dialog").dialog({
            width: 600,
            autoOpen: true,
            buttons: [
                {
                    text: "Ok",
                    "class": 'cancelButtonClass',
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
        });
        $("#unseen_dialog").css('display', 'block');
    }
  });


   