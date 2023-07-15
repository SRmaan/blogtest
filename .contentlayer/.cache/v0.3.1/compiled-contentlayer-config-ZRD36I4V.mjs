// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  contentType: "mdx",
  filePathPattern: "blogs/*.mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    published: { type: "boolean", required: false },
    featured: { type: "boolean", required: false },
    description: { type: "string", required: true },
    author: { type: "string", required: true },
    repository: { type: "string", required: false },
    ogImage: { type: "string", required: false },
    image: { type: "string", required: false }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => {
        return `/${doc._raw.flattenedPath}`;
      }
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        return `${doc._raw.flattenedPath.split("/").slice(1).join("/")}`;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "./content", documentTypes: [Blog] });
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZRD36I4V.mjs.map
