module.exports = {
  async redirects() {
    return [
      {
        source: "/fukushimabonchi-entrance",
        destination: "/fukushimabonchi",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
  experimental: {
    optimizeFonts: true,
  },
};
