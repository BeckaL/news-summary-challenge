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

  describe("get by id", function() {
    it('gets story by id', function() {
      var nl = new NewsList()
      nl.add('Apocalypse imminent', 'www.apocalypsewhen.com')
      nl.add('All fine dw', 'www.allfinedw.com')
      expect(nl.getById(1).url).toEqual('www.allfinedw.com')
    })
  })
})
