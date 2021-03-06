tinymce.init({
    selector: 'textarea',
    height: '400',
    content_css: '/assets/css/tinymce.css',
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table contextmenu paste jbimages sh4tinymce"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image jbimages sh4tinymce",
    relative_urls: false,
});