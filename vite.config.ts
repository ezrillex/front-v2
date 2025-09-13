import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as fs from 'node:fs';
import * as path from 'node:path';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,
		port: 5173,
		// allowedHosts: ['*.ngrok-free.app'] // tu host de ngrok
		allowedHosts: true // todo change this temp for testing allow all
	}
});
