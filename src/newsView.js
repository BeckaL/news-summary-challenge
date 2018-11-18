(function(exports) {

  NewsView = function() {
  }

  NewsView.prototype.toHTML = function (story) {
    let title = story.title
    let url = story.url
    return `<li><a href="${url}">${title}</a></li>`
  };


  exports.NewsView = NewsView
})(this)
