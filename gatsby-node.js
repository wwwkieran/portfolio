const path = require('path')
const postTemplate = path.resolve('./src/pages/blogPost.js')

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx (sort: { frontmatter: { index: ASC }}) {
        nodes {
          id
          frontmatter {
            title
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)
  data.allMdx.nodes.forEach((node, index) => {
    let pathPrepend = ''
    if (node.internal.contentFilePath.includes('/projects/')) {
      pathPrepend = 'work/'
    }
    if (node.internal.contentFilePath.includes('/blog/')) {
      pathPrepend = 'blog/'
    }
    actions.createPage({
      path: pathPrepend + node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        prev: index === 0 ? null : data.allMdx.nodes[index - 1],
        next: index === data.allMdx.nodes.length - 1 ? null : data.allMdx.nodes[index + 1]
      }
    })
  })
}
