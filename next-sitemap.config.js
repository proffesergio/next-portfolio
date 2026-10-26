module.exports = {
  siteUrl: process.env.SITE_URL || 'https://billsbro.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
