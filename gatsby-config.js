/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'wwwkieran',
    siteUrl: 'https://parikh.ca',
    instagramUrl: 'https://instagram.com/wwwkieran',
    githubUrl: 'https://github.com/wwwkieran',
    linkedinUrl: 'https://www.linkedin.com/in/kieranparikh/',
    tiktokUrl: 'https://www.tiktok.com/@wwwkieran'
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: './src/pages/blog/'
      },
      __key: 'blog'
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'victor mono',
          'Noto Serif Display:200',
          'Cormorant Garamond'
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
              maxWidth: 500,
              linkImagesToOriginal: false,
              showCaptions: ['title'],
              markdownCaptions: true,
              wrapperStyle: 'margin: 20px;'
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
          },
          'gatsby-plugin-react-svg',
          {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
              trackingIds: [
                'G-6EV4TH7GBN' // Google Analytics / GA
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
                anonymize_ip: false
              },
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is also optional
                respectDNT: false
              }
            }
          },
          {
            resolve: 'gatsby-plugin-manifest',
            options: {
              name: 'Kieran\'s Portfolio',
              short_name: 'Portfolio',
              start_url: '/',
              background_color: '#ffffff',
              theme_color: '#ffffff',
              display: 'browser',
              icon: 'src/images/favicon4.svg'
            }
          }
        ]
      }
    }
  ]
}
