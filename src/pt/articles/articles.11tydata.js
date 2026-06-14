// Shared data for every Portuguese article (mirrors the EN one).
module.exports = {
  layout: "layouts/base.njk",
  nav: "partials/nav-article.njk",
  footer: "partials/footer-article.njk",
  styles: ["/assets/css/main.css", "/assets/css/article-theme.css"],
  ogType: "article",
  feed: true,
  tags: ["articles"],
};
