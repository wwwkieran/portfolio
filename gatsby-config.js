/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Kieran Sagar Parikh',
    siteUrl: 'https://parikh.ca'
  },
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './src/pages/projects/'
      },
      __key: 'projects'
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'victor mono',
          'Noto Serif Display:200'
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: ['title'],
            }
          },
          {
            resolve: 'gatsby-remark-video',
            options: {
              width: '100%',
              height: 'auto',
              preload: 'auto',
              muted: true,
              autoplay: true,
              playsinline: true,
              controls: false,
              loop: true
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: ['png', 'jpg', 'jpeg', 'bmp', 'tiff']
            }
          }
        ]
      }
    }
  ]
}
