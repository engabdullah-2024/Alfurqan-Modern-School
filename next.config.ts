/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'encrypted-tbn0.gstatic.com',
      'scontent.fmgq1-2.fna.fbcdn.net',
      'avatars.githubusercontent.com', // ✅ Add this for your dev profile image
    ],
  },
};

module.exports = nextConfig;
