<template >
    <v-container fluid>
        <div class="page_area d-md-flex footer_padding d-none pb-md-10" >
            <left-menu page="promotion"></left-menu >
            <div class="pl-5  pt-3" >
                <h1 class="bold" >
                    Акции
                </h1 >
                <h3 class="py-4" >{{promotion.name}}</h3 >

                <v-img :src="'http://185.22.61.189:1337'+promotion.big_img.url"
                       max-width="881"
                       class="pt-5"
                       :contain="true"
                ></v-img >
                <div class="pb-4 body-2" >
                    <div v-html="converter.makeHtml(promotion.description)"></div>
                </div >
            </div >
        </div >
        <div class="px-2 pt-3 d-md-none d-block pb-10 pb-md-4" >
            <h1 class="bold" >
                Акции
            </h1 >

            <v-img :src="'http://185.22.61.189:1337'+promotion.preview.url"
                   max-width="881"
                   class="pt-5"
                   :contain="true"
            ></v-img >
            <h3 class="py-4" >{{promotion.name}}</h3 >
            <div class="pb-10 pb-md-4 body-2" >
                <div v-html="converter.makeHtml(promotion.description)"></div>
            </div >
        </div >
    </v-container >
</template >

<script >
    import leftMenu from '../../../layouts/left-menu'
    const axios = require('axios').default;
    var showdown  = require('showdown');
    export default {
        name: "index",
        components: {
            leftMenu,
        },
        data () {
            return {
                promotion:{},
                converter: new showdown.Converter()
            }
        },
        asyncData ({ params }) {
            return axios.get(`http://185.22.61.189:1337/promotions/${params.id}`)
                .then((res) => {
                    return { promotion: res.data }
                })
        },
        methods:{

        },
        head () {
            return {
                title:'Акция '+ this.promotion.name +' в Суши-Барах Sushi-Studio Иркутск Японская кухня. Суши и роллы.',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { hid: 'description', name: 'description', content: ' Акция '+ this.promotion.name +' в уютные японские суши бары в Иркутске. Вкусная атмосфера классической и современной японии. Японская кухня, бизнес-ланч, Роллы, суши, сеты. ' }
                ]
            }
        },
    }
</script >

<style scoped >

</style >