<template >
    <v-container class="px-lg-2 px-0 pt-lg-2 pt-0">
        <div class="page_area d-flex" >
            <left-menu :bars="bars"
                       :active="active"
                       page="bar"
            ></left-menu >
            <div class="right_part_page" >
                <rest-menu :bar="active_bar" :bars="bars"></rest-menu >
                <v-content >
                </v-content >
            </div >
        </div >
    </v-container >
</template >

<script >
    import leftMenu from '../../../layouts/left-menu'
    import restMenu from '../../../components/bar/rest-menu'
    import myToast from '../../../components/my-toast'
    // import myFooter from './footer'
    const axios = require('axios').default;
    export default {
        name: "index",
        components: {
            leftMenu,
            restMenu,
            myToast
        },
        data(){
            return {
                bars:[],
                active:this.$route.params.id
            }
        },
        asyncData ({ params }) {
            return axios.get(`http://185.22.61.189:1337/bars/`)
                .then((res) => {
                    return { bars: res.data }
                })
        },
        computed:{
            active_bar: function () {
                const bar = this.bars.filter((item)=>{
                    return item.id == this.active
                })
                return bar[0]
            }
        },
        head () {
            return {
                title: this.active_bar.Name+' Суши-Бар Sushi-Studio Иркутск Японская кухня. Суши и роллы.',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { hid: 'description', name: 'description', content: this.active_bar.Name+' Уютные японские суши бары в Иркутске. Вкусная атмосфера классической и современной японии. Японская кухня, бизнес-ланч, Роллы, суши, сеты. ' }
                ]
            }
        },
    }
</script >

<style scoped >
    .vh-100 {
        height: 100vh;
    }

    .right_part_page {
        width: 100%;
    }
</style >