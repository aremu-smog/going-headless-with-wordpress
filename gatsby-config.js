module.exports = {
  siteMetadata: {
    title: `Headless WordPress Blog`,
    description: `Learn how to use headless WordPress with GatsbyJS`,
    author: `@aremu-smog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://web-boss.com.ng/events/graphql`,
        type: {
          Post: {
            limit: 8,
          },
        },
      },
    },

    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://theakankewoman.us16.list-manage.com/subscribe/post?u=f340dafd9608cf09cc988f187&amp;id=a2eb241fd7`,
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
