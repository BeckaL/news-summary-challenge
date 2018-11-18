ApiConnection= function() {
  this.apiKey = apiKey
}

ApiConnection.prototype.getNews = function () {
  api = 'https://content.guardianapis.com/search?api-key='
  fullAddress = api + this.apiKey

  return this.fetchFromApi(fullAddress)

};

ApiConnection.prototype.fetchFromApi = function (address) {
  return fetch(address)
  .then(function(response) {
      return response.json()
  })
  .then(function(t) {
    return t
  });
};



ApiConnection.prototype.addNews = function (json, newsList) {

  json.then( (data) =>{
    for (i = 0; i < 10; i ++) {
      let story = data.response.results[i]
      newsList.add(story.webTitle, story.webUrl)
    }
  })
  return newsList.stories
};



//
// response:
// currentPage: 1
// orderBy: "newest"
// pageSize: 10
// pages: 207507
// results: Array(10)
// 0:
//   apiUrl: "https://content.guardianapis.com/sport/live/2018/nov/17/england-v-japan-rugby-union-international-live"
//   id: "sport/live/2018/nov/17/england-v-japan-rugby-union-international-live"
//   isHosted: false
//   pillarId: "pillar/sport"
//   pillarName: "Sport"
//   sectionId: "sport"
//   sectionName: "Sport"
//   type: "liveblog"
//   webPublicationDate: "2018-11-17T14:47:46Z"
//   webTitle: "England v Japan: rugby union international – live!"
//   webUrl: "https://www.theguardian.com/sport/live/2018/nov/17/england-v-japan-rugby-union-international-live"
// __proto__: Object
