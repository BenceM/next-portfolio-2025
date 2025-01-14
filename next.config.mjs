const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: process.env.SUPABASE_URL,
				port: "",
				pathname: "/storage/v1/object/public/project%20images/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
