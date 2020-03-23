<template >
    <v-container fluid>
        <div class="page_area d-md-flex footer_padding d-none pb-md-10" >
            <left-menu page="promotion"></left-menu >
            <div class="pl-5  pt-3" >
                <h1 class="bold" >
                    Акции
                </h1 >
                <h3 class="py-4" >{{getPromotion.name}}</h3 >

                <v-img :src="getApiBaseUrl + getPromotion.big_img.url"
                       max-width="881"
                       class="pt-5"
                       :contain="true"
                ></v-img >
                <div class="pb-4 body-2" >
                    <div v-html="converter.makeHtml(getPromotion.description)"></div>
                </div >
            </div >
        </div >
        <div class="px-2 pt-3 d-md-none d-block pb-10 pb-md-4" >
            <h1 class="bold" >
                Акции
            </h1 >

            <v-img :src="getApiBaseUrl + getPromotion.preview.url"
                   max-width="881"
                   class="pt-5"
                   :contain="true"
            ></v-img >
            <h3 class="py-4" >{{getPromotion.name}}</h3 >
            <div class="pb-10 pb-md-4 body-2" >
                <div v-html="converter.makeHtml(getPromotion.description)"></div>
            </div >
        </div >
    </v-container >
</template >

<script>
    import { mapGetters } from 'vuex'
    import leftMenu from '@/layouts/left-menu'
    var showdown  = require('showdown');

    export default {
        name: "index",
        components: {
            leftMenu,
        },
        data () {
            return {
                converter: new showdown.Converter()
            }
        },
        async fetch ({ params, store }) {
            await store.dispatch('fetchPromotion', params.id)
        },
        computed: {
            ...mapGetters(['getPromotion', 'getApiBaseUrl'])
        },
        head () {
            return {
                title:'Акция '+ this.getPromotion.name +' в Суши-Барах Sushi-Studio Иркутск Японская кухня. Суши и роллы.',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { hid: 'description', name: 'description', content: ' Акция '+ this.getPromotion.name +' в уютные японские суши бары в Иркутске. Вкусная атмосфера классической и современной японии. Японская кухня, бизнес-ланч, Роллы, суши, сеты. ' }
                ]
            }
        },
    }
</script >