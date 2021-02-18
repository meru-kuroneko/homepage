exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
 
  const result = await graphql(
    `
      {
        allMicrocmsArt(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              createdAt
              picture {
                url
              }
              thumbnail {
                url
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }
 
  // result.data.allMicrocmsArt.edges.forEach((post, index) => {
  //   createPage({
  //     path: post.node.id,
  //     component: path.resolve('./src/templates/blog-post.js'),
  //     context: {
  //       slug: post.node.id,
  //     },
  //   });
  // });
};