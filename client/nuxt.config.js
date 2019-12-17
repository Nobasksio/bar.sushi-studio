module.exports = {
    server: {
        port: 3000, // default: 3000
        host: 'localhost' // default: localhost
    },
    loading: {
        color: 'blue',
        height: '5px'
    },
    buildModules: [
        '@nuxtjs/vuetify'
    ],
    modules: [
        'vue-yandex-maps/nuxt',

        '@nuxtjs/axios',
        ['@nuxtjs/yandex-metrika',
            {
                id: '22312075',
                webvisor: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
            }]


    ],
    head: {
        script: [],
    },
    vuetify: {
        treeShake: true,
        customVariables: ['~assets/variables.scss']
    },
    css: [
        {src: '~assets/style/style.css', lang: 'css'}
    ]
}