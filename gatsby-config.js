module.exports = {
  siteMetadata: {
    siteUrl: "https://www.mori-reality.cz",
    title: "MoriReality",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-YSN8FJKHGX",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
