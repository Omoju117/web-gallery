/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://omoju117.github.io/web-gallery/',
    basePath: process.env.GITHUB_ACTIONS ? '/web-gallery' : '',
    trailingSlash: true,
  },
};
