import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			'text': '#f2f6ec',
			'background': '#0c1007',
			'primary': '#b8d68f',
			'secondary': '#5d8429',
			'accent': '#9bd252',
		   },		   
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
