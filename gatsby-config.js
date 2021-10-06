module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "yossi_website",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `open sans`,
                ],
                display: 'swap'
            }
        }
    ],
};
