// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import readingTime from 'remark-reading-time';

// https://astro.build/config
export default defineConfig({
    site: 'https://freyalilzy.github.io',
    base: '/port',
    markdown: {
        remarkPlugins: [
            readingTime,
            [remarkGfm, { 
                singleTilde: false,
                footnote: true,
            }],
        ],
    },
});
