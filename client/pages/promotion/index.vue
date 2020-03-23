<template >
    <v-container fliud>
        <div class="page_area d-flex footer_padding" >
            <left-menu page="promotion"></left-menu >
            <v-container fluid class="pa-0" >
            <div class="pl-0 pl-md-5  pt-3" >
                <h1 class="bold">
                    Акции
                </h1>
                <promo-list :promos="getPromotions"></promo-list>
            </div >
            </v-container>
        </div >
    </v-container >
</template >

<script>
    import { mapGetters } from 'vuex'
    import leftMenu from '@/layouts/left-menu'
    import myToast from '@/components/my-toast'
    import promoList from '@/components/promotion/promo-list'

    export default {
        name: "index",
        components: {
            leftMenu,
            myToast,
            promoList
        },
        async fetch ({ store }) {
            await store.dispatch('fetchPromotions')
        },
        computed: {
            ...mapGetters(['getPromotions'])
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
        }
    }
</script >

<style scoped >

</style >