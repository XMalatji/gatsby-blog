module.exports = {
    siteMetadata: {
        title: 'My bloggie',
        description: 'my cool bloh',
    },
    plugins: [
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        }
    ]
}