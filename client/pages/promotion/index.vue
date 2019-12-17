<template >
    <v-container fliud>
        <div class="page_area d-flex footer_padding" >
            <left-menu page="promotion"></left-menu >
            <v-container fluid class="pa-0" >
            <div class="pl-0 pl-md-5  pt-3" >
                <h1 class="bold">
                    Акции
                </h1>
                <promo-list :promos="promos"></promo-list>
            </div >
            </v-container>
        </div >
    </v-container >
</template >

<script >
    import leftMenu from '../../layouts/left-menu'
    import restMenu from '../../components/bar/rest-menu'
    import myToast from '../../components/my-toast'
    import promoList from '../../components/promotion/promo-list'
    const axios = require('axios').default;
    export default {
        name: "index",
        components: {
            leftMenu,
            restMenu,
            myToast,
            promoList
        },
        data () {
            return {
                promos:[]
            }
        },
        asyncData ({ params }) {
            return axios.get(`http://185.22.61.189:1337/promotions`)
                .then((res) => {
                    return { promos: res.data }
                })
        },
        head () {
            return {
                title:'Акции в Суши-Барах Sushi-Studio Иркутск Японская кухня. Суши и роллы.',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { hid: 'description', name: 'description', content: ' Акции в уютные японские суши бары в Иркутске. Вкусная атмосфера классической и современной японии. Японская кухня, бизнес-ланч, Роллы, суши, сеты. ' }
                ]
            }
        },

    }
</script >

<style scoped >

</style >