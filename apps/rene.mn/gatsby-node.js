const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const capitalize = require("lodash/capitalize");

exports.onCreateNode = function ({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    const category = value.replace(/^\/([^\/]*).*$/, "$1"); // eslint-disable-line

    createNodeField({
      name: "slug",
      node,
      value: value.replace(/\/$/, ""),
    });

    createNodeField({
      name: "category",
      node,
      value: capitalize(category),
    });
  }
};

exports.createPages = async function createPages({
  graphql,
  actions,
  reporter,
}) {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            timeToRead
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨ERROR: Loading "createPages" query');
  }

  const notes = result.data.allMdx.edges;

  notes.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/components/Lab/Lab.jsx"),
      context: { id: node.id },
    });
  });
};
