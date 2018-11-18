(function(exports) {

  NewsList = function() {
    this.stories = []
  }

  NewsList.prototype.add = function (title, url) {
    let id = this.stories.length
    let ns = new NewsStory(title, url, id)
    this.stories.push(ns)
  };

  exports.NewsList = NewsList

})(this)
