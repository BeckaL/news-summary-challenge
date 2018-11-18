(function(exports) {

  NewsView = function(newsList) {
    this.newsList = newsList
  }

  NewsView.prototype.toHTML = function (story) {
    let title = story.title
    let url = story.url
    return `<li><a href="${url}">${title}</a></li>`
  };

  NewsView.prototype.addNews = function () {

    let stories = this.newsList.stories

      for (i = 0; i < stories.length; i ++) {
        let story = stories[i]
        let storyView = document.createElement("p")
        storyView.innerHTML = this.toHTML(story)
        document.body.appendChild(storyView)
      }
    }


  exports.NewsView = NewsView
})(this)
