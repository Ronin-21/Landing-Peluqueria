/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		GOOGLE_MAPS_API_KEY: 'AIzaSyBveINAyMJmKQheF7xUwB_BVOSeo3AeJB8',
	},
};

module.exports = nextConfig;
