module.exports = function (eleventyConfig) {
  // Static assets copied as-is
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("admin");

  // Home, About, Services, Results, Contact are hand-built static pages.
  // They're copied through untouched — only the Blog is templated/CMS-driven.
  eleventyConfig.addPassthroughCopy({ "src/pages": "." });

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

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    // Only markdown files (blog posts) and .njk files go through templating.
    // Plain .html pages live in src/pages and are passthrough-copied above,
    // so they render exactly as authored with no templating risk.
    templateFormats: ["md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
