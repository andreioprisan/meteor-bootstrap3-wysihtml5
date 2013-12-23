Package.describe({
    summary: "bootstrap3 wysiwyg HTML5 editor"
});

Package.on_use(function (api) {
    api.use(['bootstrap3', 'jquery'], 'client');

	api.add_files('lib/wysihtml5.js', 'client', {bare:true});  
	api.add_files('lib/bootstrap-wysihtml5-0.0.2/bootstrap-wysihtml5.css', 'client'); 
	api.add_files('lib/bootstrap-wysihtml5-0.0.2/wysihtml5-0.3.0.js', 'client', {bare:true}); //ok
	api.add_files('lib/bootstrap-wysihtml5-0.0.2/bootstrap3-wysiwyg5-color.css', 'client'); //ok
	api.add_files('lib/bootstrap-wysihtml5-0.0.2/bootstrap3-wysihtml5.js', 'client', {bare:true}); //ok
});
