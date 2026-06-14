// Shared data for every English article — keeps per-file front matter minimal.
module.exports = {
  layout: "layouts/base.njk",
  nav: "partials/nav-article.njk",
  footer: "partials/footer-article.njk",
  styles: ["/assets/css/main.css", "/assets/css/article-theme.css"],
  ogType: "article",
  feed: true,
  tags: ["articles"],
};
