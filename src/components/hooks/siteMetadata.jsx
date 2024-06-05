import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          instagramUrl
          githubUrl
          linkedinUrl
          tiktokUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}
