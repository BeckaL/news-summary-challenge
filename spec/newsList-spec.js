describe("newsList", function() {
  it('initializes with no news stories', function() {
      var nl = new NewsList
      expect(nl.stories).toEqual([])
  })
})
