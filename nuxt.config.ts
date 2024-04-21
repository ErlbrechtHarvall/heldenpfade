import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: true},
    css: [
        'vuetify/styles',
        "@mdi/font/css/materialdesignicons.css",
    ],
    build: {
        transpile: ['vuetify']
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    // , '@nuxtjs/i18n'
    modules: ['@pinia/nuxt'],
    vite: {
        plugins: [
            AutoImport({
                imports: ['vue', 'vue-router'],
                dirs: ['./composables'],
                vueTemplate: true,
            }),
            Components({
                dirs: [
                    './components/',
                    // Component folders that should be auto-imported
                ],
                dts: true,
                directoryAsNamespace: false,
            }),
        ],
        resolve: {
            alias: {
                '@constants': path.resolve(__dirname, 'constants'),
                '@stores': path.resolve(__dirname, 'stores'),
                '@customTypes': path.resolve(__dirname, 'customTypes'),
                '@themes': path.resolve(__dirname, 'themes'),
                '@server': path.resolve(__dirname, 'server'),
                '@utils': path.resolve(__dirname, 'utils'),
                '@components': path.resolve(__dirname, 'components'),
                '@composables': path.resolve(__dirname, 'composables'),
            },
        },
    },
});
