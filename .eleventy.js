module.exports = function (eleventyConfig) {
  // Copy the existing asset tree straight through to /assets (CSS/JS/img untouched).
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  // Root-level static files that must keep their exact path (copied verbatim).
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/404.html": "404.html" });
  eleventyConfig.addPassthroughCopy({ "src/feed.xml": "feed.xml" });

  // Normalise output URLs: ".../index.html" → ".../" for canonical/og/hreflang.
  eleventyConfig.addFilter("cleanUrl", (url) => (url || "").replace(/index\.html$/, ""));

  // Sort an articles collection by their curated `order` (home grid order).
  eleventyConfig.addFilter("sortByOrder", (arr) =>
    [...(arr || [])].sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999))
  );

  // Articles for a given language (defaults to en while PT articles don't exist).
  eleventyConfig.addFilter("articlesIn", (arr, lang) =>
    (arr || []).filter((a) => a.data.lang === lang)
  );

  // --- i18n helpers -------------------------------------------------------
  // Find the counterpart of a page in the other language (same translationKey).
  // Used for hreflang tags, the EN|PT switch, and the <head> redirect.
  eleventyConfig.addFilter("counterpart", function (collectionAll, translationKey, lang) {
    if (!translationKey) return null;
    const other = lang === "pt" ? "en" : "pt";
    return (collectionAll || []).find(
      (item) => item.data.translationKey === translationKey && item.data.lang === other
    ) || null;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
