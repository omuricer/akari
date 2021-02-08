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
};
