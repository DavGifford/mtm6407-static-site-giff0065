import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-US',
    title: 'My Portfolio',
    description: 'Static Site Genrator',
    theme: defaultTheme({
        layout: 'CustomLayout',
        navbar: [
          {
              text: 'Home',
              link: '/',
          },
          {
            text: 'Resume',
            link: '/resume/',
        },
        {
            text: 'Photography',
            link: '/photography/',
        },
        {
            text: 'Web',
            link: '/web/',
        },
        {
            text: 'Graphics',
            link: '/graphics/',
        }
        ],
    }),
}