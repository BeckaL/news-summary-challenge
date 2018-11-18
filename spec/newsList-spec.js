describe("newsList", function() {

  describe("initialize", function() {
    it('initializes with no news stories', function() {
        var nl = new NewsList()
        expect(nl.stories).toEqual([])
    })
  })

  describe("add", function() {
    it('adds a news story', function() {
      var nl = new NewsList()
      nl.add('Apocalypse imminent', 'www.apocalypsewhen.com')
      expect(nl.stories.length).toEqual(1)
    })

    it('news stories are added with unique ids', function() {
      var nl = new NewsList()
      nl.add('Apocalypse imminent', 'www.apocalypsewhen.com')
      expect(nl.stories[0].id).toEqual(0)
    })
  })
})
