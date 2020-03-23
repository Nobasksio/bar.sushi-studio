<template >
    <v-container class="px-lg-2 px-0 pt-lg-2 pt-0">
        <div class="page_area d-flex" >
            <left-menu :bars="bars"
                       :active="active"
                       page="bar"
                       @changeActive="setActive"
            ></left-menu>
            <div class="right_part_page" >
                <rest-menu :bar="active_bar" :bars="bars"></rest-menu >
            </div >
        </div >
    </v-container >
</template >

<script>
    import { mapGetters } from 'vuex'
    import leftMenu from '@/layouts/left-menu'
    import restMenu from '@/components/bar/rest-menu'
    import myToast from '@/components/my-toast'

    export default {
        name: "index",
        components: {
            leftMenu,
            restMenu,
            myToast
        },
        data () {
            return {
                activeBarId: this.$route.params.id
            }
        },
        async fetch ({ store }) {
            await store.dispatch('fetchBars')
        },
        created () {
            this.$router.back()
        },
        computed: {
            ...mapGetters(['bars']),
            active_bar () {
                return this.bars.filter((item) => item.id === +this.activeBarId)[0]
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
        methods: {
            setActive (id) {
                this.active = id
            }
        }
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