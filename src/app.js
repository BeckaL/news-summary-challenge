ap = new ApiConnection()
data = ap.getNews()
nl = new NewsList()
ap.addNews(data, nl)
nv = new NewsView(nl)
nv.addNews()
nv.urlChange()