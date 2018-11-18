(function(exports) {

  NewsView = function(newsList) {
    this.newsList = newsList
  }

  NewsView.prototype.toHTML = function (story) {
    return `<li><a href="#stories/${story.id}">${story.title}</a></li>`
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

    NewsView.prototype.urlChange = function () {
    window.addEventListener("hashchange", () => this.showStoryText(), false)
    };

    NewsView.prototype.getStoryFromUrl = function (location) {
        return location.hash.split('/')[1]
    };

    NewsView.prototype.showStoryText = function () {
      id = this.getStoryFromUrl(window.location)
      text = this.newsList.getById(id).url
      document.getElementById('storyText').innerHTML = text
    };

  exports.NewsView = NewsView
})(this)
