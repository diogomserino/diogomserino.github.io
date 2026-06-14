// Directory data for all English pages: language + URL mapping.
// EN lives at the site root, so we strip the leading "/en" from the path.
module.exports = {
  lang: "en",
  eleventyComputed: {
    permalink: (data) => {
      if (data.permalink === false) return false;
      const stem = data.page.filePathStem.replace(/^\/en/, "");
      if (stem === "/index" || stem === "") return "/index.html";
      return stem + ".html";
    },
  },
};
