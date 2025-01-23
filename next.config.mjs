/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KINDE_CLIENT_ID: process.env.KINDE_CLIENT_ID,
    KINDE_CLIENT_SECRET: process.env.KINDE_CLIENT_SECRET,
    KINDE_ISSUER_URL: process.env.KINDE_ISSUER_URL,

    // Site URLs for local and production environments
    KINDE_SITE_URL:
      process.env.VERCEL_ENV === "production"
        ? process.env.VERCEL_KINDE_SITE_URL
        : process.env.KINDE_SITE_URL,

    KINDE_POST_LOGIN_REDIRECT_URL:
      process.env.VERCEL_ENV === "production"
        ? process.env.VERCEL_KINDE_POST_LOGIN_REDIRECT_URL
        : process.env.KINDE_POST_LOGIN_REDIRECT_URL,

    KINDE_POST_LOGOUT_REDIRECT_URL:
      process.env.VERCEL_ENV === "production"
        ? process.env.VERCEL_KINDE_POST_LOGOUT_REDIRECT_URL
        : process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
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

export default nextConfig;
