const express = require('express');

const api = require('./api');

const app = express.Router();

// get all posts ordered by publish date
app.get('/posts/get-all-blog-posts', function (req, res) {
  api.getAllBlogPosts(function (apiResponse) {
    res.json(apiResponse);
  })
})

// get all posts with specific tag
app.get('/posts/get-blog-posts-by-tag', function(req, res) {
  api.getBlogPostsByTag(req.query.tag, function(apiResponse) {
    res.json(apiResponse);
  })
})

// get the five most receltly published posts
app.get('/posts/get-five-newest-posts', function(req, res) {
  api.getFiveNewestPosts(function(apiResponse) {
    res.json(apiResponse);
  })
})

// get a single blog post based on the title attribute
app.get('/posts/get-blog-post-by-url-title', function(req, res) {
  api.getBlogPostByUrlTitle(req.query.urlTitle, function(apiResponse) {
    res.json(apiResponse);
  })
})

module.exports = app;