
module.exports = {
    reactStrictMode: true,
    images: {
      domains: ["links.papareact.com", "fakestoreapi.com", "m.media-amazon.com", "amazon.in", "drive.google.com"],
    },

    env: {
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    },
  };