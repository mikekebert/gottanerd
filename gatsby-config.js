module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
      resolve: 'gatsby-plugin-cockpit',
      options: {
        cockpitConfig: {
          baseURL: 'http://content.gottanerd.com',
          accessToken: '690d824196277929f1a864ad0600db',
        },
      },
    },
  ],
}
