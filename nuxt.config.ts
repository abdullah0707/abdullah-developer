// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
   // extends: ['@nuxt/ui-pro'],
   // uiPro: {
   //    routerOptions: false
   // },
   modules: ["@nuxt/ui"],

   ui: {
      global: true,
   },

   nitor: {
      prerender: {
         autoSubfolderIndex: false,
      }
   },

   app: {
      head: {
         title: `Abdullah | `,
         meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "pkg.description" }
         ],
         link: [
            {
               rel: 'stylesheet',
               href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css',
               integrity: "sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==",
               crossorigin: "anonymous",
               referrerpolicy: "no-referrer"
            },
            {
               rel: 'stylesheet',
               href: 'https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/inter.css',
            },
            {
               rel: 'stylesheet',
               href: 'https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap',
            },
            {
               rel: 'stylesheet',
               href: 'https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap',
            },
         ],
         script: [
            { src: 'https://smtpjs.com/v3/smtp.js' },
            { src: '/animet.js', tagPosition: 'bodyClose' },
         ]
      },
   },

   css: ['~/assets/css/tailwind.css', '~/assets/css/navbar.css', '~/assets/css/style.css', '~/assets/css/projects.css'],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },

   compatibilityDate: "2024-07-21"
});
