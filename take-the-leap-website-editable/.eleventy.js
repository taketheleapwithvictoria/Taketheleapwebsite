module.exports = function (eleventyConfig) {
  // Static assets copied as-is
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("admin");

  // A few root files that are copied untouched (favicon, robots). The sitemap is built from src/sitemap.njk.
  // The pages themselves (Home, Speaking, Services, About, Contact) are
  // .njk files in src/ that share one layout: src/_includes/base.njk.
  eleventyConfig.addPassthroughCopy({
    "src/pages/favicon.ico": "favicon.ico",
    "src/pages/robots.txt": "robots.txt",
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md").sort(
      (a, b) => a.date - b.date
    );
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
