<template >
    <v-container class="px-lg-2 px-0 pt-lg-2 pt-0">
        <div class="page_area d-flex" >
            <left-menu
                    :bars="bars"
                    :active="barActiveId"
                    :page="'bar'"
                    @changeActive="setActive"
            ></left-menu>
            <div class="right_part_page">
                <div class="bar-menu">
                    <li v-if="active_bar.photo.length">
                        <v-list-item link :to="url + '/photo'" @click="setActivePage('photo')">Фото</v-list-item>
                    </li>
                    <li v-if="active_bar.camera">
                        <v-list-item link :to="url + '/camera'" @click="setActivePage('camera')">Камера</v-list-item>
                    </li>
                    <li>
                        <v-list-item link :to="url + '/map'" @click="setActivePage('map')">Карта</v-list-item>
                    </li>
                    <li v-if="active_bar.menu">
                        <v-list-item link :to="url + '/menu'" @click="setActivePage('menu')">Меню</v-list-item>
                    </li>
                </div>
                <component
                        :is="currentPage"
                        :bar="active_bar"
                        :bars="bars"
                ></component>
            </div>
        </div >
    </v-container >
</template >

<script>
    import { mapMutations, mapGetters } from 'vuex'
    import leftMenu from '@/layouts/left-menu'
    import photoComponent from '@/components/bar/photoComponent'
    import mapComponent from '@/components/bar/mapComponent'
    import menuComponent from '@/components/bar/menuComponent'
    import cameraComponent from '@/components/bar/cameraComponent'

    export default {
        name: "index",
        components: {
            leftMenu, photoComponent, mapComponent, menuComponent, cameraComponent
        },
        data () {
            return {
                currentPage: 'photoComponent',
                barActiveId: 1,
                pages: ['camera', 'photo', 'map', 'menu']
            }
        },
        async fetch ({ store }) {
            await store.dispatch('fetchBars')
        },
        computed: {
            ...mapGetters(['bars']),
            active_bar () {
                return this.bars.filter(item => item.id === +this.barActiveId)[0]
            },
            url () {
                return `/bar/${this.barActiveId}`
            }
        },
        head () {
            return {
                title: 'Суши-Бары Sushi-Studio Иркутск Японская кухня. Суши и роллы.',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=420px, initial-scale=1' },
                    { hid: 'description', name: 'description', content: 'Уютные японские суши бары в Иркутске. Вкусная атмосфера классической и современной японии. Японская кухня, бизнес-ланч, Роллы, суши, сеты. ' }
                ]
            }
        },
        methods: {
            ...mapMutations(['setActivePageTopMenu']),
            setActive (id) {
                this.barActiveId = id
            },
            setActivePage (value) {
                this.setActivePageTopMenu(value)
            }
        }
    }
</script>

<style scoped>
    .vh-100 {
        height: 100vh;
    }
    .right_part_page {
        width: 100%;
    }
    .bar-menu li {
        display: inline-block;
    }
    .bar-menu li a {
        display: block;
        color: rgba(0, 0, 0, 0.54);
        font-weight: 500;
        padding: 15px 20px;
    }
    .bar-menu li a.v-list-item--active {
        color: #CE8714;
        border-bottom: 3px solid #CE8714;
    }
    .bar-menu li a.v-list-item--link:before {
        background: none;
    }
    .bar-menu li a.v-list-item {
        min-height: unset;
    }
</style >