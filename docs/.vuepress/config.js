import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-US',
    title: 'My Portfolio',
    description: 'Static Site Genrator',
    theme: defaultTheme({
        // default theme config
        navbar: [
          {
              text: 'Home',
              link: '/',
          }
        ],
    }),
}