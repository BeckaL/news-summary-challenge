
ApiConnection= function() {
  this.apiKey = apiKey
}

ApiConnection.prototype.getNews = function () {
  api = 'https://content.guardianapis.com/search?api-key='
  fullAddress = api + this.apiKey

  fetch(
    fullAddress, {
    // mode: 'cors'
  })
  .then(function(response) {
      return response.json()
    })
    .then(function(t) {
      console.log(t);
    });

};
