describe("newsStory", function() {
  it('has a title and a url', function() {
      var ns = new NewsStory('Apocalypse imminent', 'www.apocalypsewhen.com')
      expect(ns.title).toEqual('Apocalypse imminent')
      expect(ns.url).toEqual('www.apocalypsewhen.com')
  })
})
