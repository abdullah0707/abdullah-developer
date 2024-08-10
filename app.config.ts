export default defineAppConfig({
   ui: {
      header: {
         links: {
            trailingIcon: {
               name: 'i-ph-caret-down' // Defaults to `ui.icons.chevron`
            }
         },
         button: {
            icon: {
               open: 'i-ph-list',
               close: 'i-ph-x'
            }
         },
      },
   }
})
