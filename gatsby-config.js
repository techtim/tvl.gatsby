module.exports = {
  siteMetadata: {
    title: 'TVL',
    author: 'Anton Vasin',
    description: 'TVL website',
    siteUrl: 'https://tvl.io',
    vimeo: 'https://vimeo.com/timtvl',
    fb: 'https://www.facebook.com/timvisuals/',
    youtube: 'https://www.youtube.com/channel/UCUMPgeNiY0WnSZCiyxHOquQ',
    mainHeroSrc:
      'https://player.vimeo.com/video/293953229?autoplay=1&title=0&muted=1',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'downloads',
        path: `${__dirname}/src/downloads/`,
        ignore: ['**/.*'], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1440,
              quality: 70,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-73333824-2',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': ['cache-control: public, max-age=0, must-revalidate'],
          '/static': ['cache-control: public, max-age=31536000,immutable'],
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-feed',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
}
