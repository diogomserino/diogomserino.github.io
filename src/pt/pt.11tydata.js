// Directory data for all Portuguese pages: language + URL mapping.
// PT lives under /pt/, so we keep the prefix.
module.exports = {
  lang: "pt",
  eleventyComputed: {
    permalink: (data) => {
      if (data.permalink === false) return false;
      const stem = data.page.filePathStem.replace(/^\/pt/, "");
      if (stem === "/index" || stem === "") return "/pt/index.html";
      return "/pt" + stem + ".html";
    },
  },
};
