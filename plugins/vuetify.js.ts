import {createVuetify} from "vuetify";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const defaultTheme = {
    dark: true,
    colors: {
        // "background": "#030303",
        // "surface": "#290000",
        // "primary": "#930C10",
        "background": "#030303",
        "surface": "#131313",
        "primary": "#290000",
        "secondary": "#F7CE65",
        "error": "#B11716",
        "info": "#FFFEBD",
        "success": "#4CAF50",
        "warning": "#E97100"
    },
    variables: {
        'border-color': '#000000',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.60,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.04,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.12,
        'dragged-opacity': 0.08,
        'theme-kbd': '#212529',
        'theme-on-kbd': '#FFFFFF',
        'theme-code': '#F5F5F5',
        'theme-on-code': '#000000',
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
        },
        theme: {
            defaultTheme: 'defaultTheme',
            themes: {
                defaultTheme,
            },
        }
    })
    nuxtApp.vueApp.use(vuetify)
})
