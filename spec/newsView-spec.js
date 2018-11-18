// describe("newsView", function() {

  describe("toHTML", function() {
    it('converts a story to HTML', function() {
      let ns = new NewsStory('Apocalypse imminent', 'www.apocalypsewhen.com', 0)
      let nv = new NewsView()
      expect(nv.toHTML(ns)).toEqual('<li><a href="www.apocalypsewhen.com">Apocalypse imminent</a></li>')
    })
  })
// })
