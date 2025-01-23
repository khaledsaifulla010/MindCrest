/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // For local development, fallback to the local environment variables
    KINDE_SITE_URL:
      process.env.KINDE_SITE_URL || `https://${process.env.VERCEL_URL}`,
    KINDE_POST_LOGOUT_REDIRECT_URL:
      process.env.KINDE_POST_LOGOUT_REDIRECT_URL ||
      `https://${process.env.VERCEL_URL}`,
    KINDE_POST_LOGIN_REDIRECT_URL:
      process.env.KINDE_POST_LOGIN_REDIRECT_URL ||
      `https://${process.env.VERCEL_URL}`,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Set-Cookie",
            value: "Secure; SameSite=None; HttpOnly; Path=/; Max-Age=3600;",
          },
        ],
      },
    ];
  },
};

// Export using ES module syntax
export default nextConfig;
