import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@router": path.resolve(__dirname, "src/router"),
			"@store": path.resolve(__dirname, "src/store"),
			"@views": path.resolve(__dirname, "src/views"),
			"@graphql": path.resolve(__dirname, "src/graphql"),
		},
	},
});
