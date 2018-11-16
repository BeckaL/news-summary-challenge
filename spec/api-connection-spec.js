describe("apiConnection", function() {
  it('has apiKey', function() {
      var ac = new ApiConnection()
      console.log(ac.apiConnection)
      expect(ac.apiKey.length).toBeGreaterThan(0)
  })
})
