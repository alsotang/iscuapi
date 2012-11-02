// Generated by CoffeeScript 1.4.0
(function() {
  var fetcher, fetcher_file, fileContent, fs, getContent, getTitle, mainFetcher, mapper, newsUrlFormat, news_urls, page_file, url, urls, _i, _len;

  fs = require('fs');

  fetcher_file = '../fetchers/jwc.scu.edu.cn';

  page_file = 'jwc.html';

  fetcher = require(fetcher_file);

  mainFetcher = require('../mainFetcher');

  fileContent = fs.readFileSync(page_file, 'utf-8');

  news_urls = fileContent.match(new RegExp(fetcher.newsUrlFormat, 'g'));

  console.log("urls: " + (news_urls.join("\n")));

  urls = fetcher.urls, newsUrlFormat = fetcher.newsUrlFormat, mapper = fetcher.mapper, getTitle = fetcher.getTitle, getContent = fetcher.getContent;

  for (_i = 0, _len = urls.length; _i < _len; _i++) {
    url = urls[_i];
    console.log([url, newsUrlFormat, mapper, getTitle, getContent]);
  }

  console.log(news_urls.map(fetcher.mapper));

  console.log('end.....');

}).call(this);
