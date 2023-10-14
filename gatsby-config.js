/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    siteUrl: 'https://www.yourdomain.tld'
  },
  plugins: ['gatsby-plugin-mdx', 'gatsby-plugin-sass', 'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './src/pages/projects/'
      },
      __key: 'projects'
    }]
}
