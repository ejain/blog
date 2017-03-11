(function() {

  var nunjucks = require('nunjucks');

  hexo.extend.tag.register('gallery', function(args, content) {
    var images = content.split("\n").map(function(row) {
      var values = row.split(/\s*\|\s*/);
	    return { src : values[0], href : values[1], caption : values[2] };
    });
    return nunjucks.render("layout/gallery.html", { images : images });
  }, true);

})();
