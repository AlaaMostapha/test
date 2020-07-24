
        $('#word-processor').click(function () {
          
          $("#dialog").dialog({
              autoOpen: true,
              width: 1000,
              quickbars_insert_toolbar: false,
              quickbars_image_toolbar: false,
              quickbars_selection_toolbar: false,
              close: function( event, ui ) {
                //write your function here or call function here
                tinymce.activeEditor.getContent();

           // Get the raw contents of the currently active editor
           tinymce.activeEditor.getContent({format : 'raw'});
           
           // Get content of a specific editor:
           if(tinymce.get('full-featured-non-premium').getContent()!=null){
             
            console.log(tinymce.get('full-featured-non-premium').getContent())
            console.log(typeof(tinymce.get('full-featured-non-premium').getContent()))
            // console.log(JSON.parse(tinymce.get('full-featured-non-premium').getContent()))
           }
          }
              // height: 'auto',
          }).prev(".ui-dialog-titlebar").addClass("file_icon");
          $("#dialog").css('display', 'block');

          tinymce.init({
            selector: '#full-featured-non-premium',
            menubar: false,
            statusbar: false,
            plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap  emoticons',
            imagetools_cors_hosts: ['picsum.photos'],
            toolbar: [
              "copy | paste cut | undo redo | searchreplace | bold italic underline strikethrough  | superscript subscript |removeformat | styleselect | table | alignleft aligncenter alignright alignjustify |  bullist numlist | outdent indent  "
              ],   
              style_formats: [
                {title: 'Heading 2', format: 'h2'},
                {title: 'Heading 3', format: 'h3'},
                {title: 'Heading 4', format: 'h4'},
                {title: 'Heading 5', format: 'h5'},
                {title: 'Heading 6', format: 'h6'},
                {title: 'Normal', block: 'div'}
                ],           
            toolbar_sticky: true,
            autosave_ask_before_unload: true,
            autosave_interval: "300s",
            autosave_prefix: "{path}{query}-{id}-",
            // autosave_restore_when_empty: false,
            autosave_retention: "2m",
            image_advtab: true,
            link_list: [
              { title: 'My page 1', value: 'http://www.tinymce.com' },
              { title: 'My page 2', value: 'http://www.moxiecode.com' }
            ],
            image_list: [
              { title: 'My page 1', value: 'http://www.tinymce.com' },
              { title: 'My page 2', value: 'http://www.moxiecode.com' }
            ],
            image_class_list: [
              { title: 'None', value: '' },
              { title: 'Some class', value: 'class-name' }
            ],
            importcss_append: true,
            file_picker_callback: function (callback, value, meta) {
              /* Provide file and text for the link dialog */
              if (meta.filetype === 'file') {
                callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
              }
          
              /* Provide image and alt text for the image dialog */
              if (meta.filetype === 'image') {
                callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
              }
          
              /* Provide alternative source and posted for the media dialog */
              if (meta.filetype === 'media') {
                callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
              }
            },
            templates: [
                  { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
              { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
              { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
            ],
            template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
            template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
            height: 600,
            image_caption: true,
            noneditable_noneditable_class: "mceNonEditable",
            toolbar_mode: 'sliding',
            contextmenu: "link image imagetools table",
           });

          
      });


     