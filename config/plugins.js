module.exports = ({ env }) => ({
  "fields-i18n": {
    enabled: true,
    resolve: "node_modules/@fvarano/strapi-plugin-fields-i18n",
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "content-versioning": {
    enabled: true,
  },
});
