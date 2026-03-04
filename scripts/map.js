(function() {

  var nunjucks = require('nunjucks');
  var path = require('path');

  hexo.extend.tag.register('map', function(args, content) {
    var geojsonFile = args[0];
    var options = {};
    content.split("\n").forEach(function(line) {
      line = line.trim();
      if (!line) return;
      var parts = line.split(/\s*\|\s*/);
      if (parts.length === 2) {
        options[parts[0].trim()] = parts[1].trim();
      }
    });

    var post = this;
    var geojsonUrl = path.posix.join(hexo.config.root, post.path, geojsonFile);
    var center = options.center ? options.center.split(/\s*,\s*/).map(Number) : [0, 0];
    var zoom = parseInt(options.zoom) || 10;
    var height = parseInt(options.height) || 400;
    var mapId = 'map-' + Math.random().toString(36).substring(2, 8);

    return nunjucks.render("layout/map.html", {
      geojsonUrl: geojsonUrl,
      center: center,
      zoom: zoom,
      height: height,
      mapId: mapId
    });
  }, true);

})();
