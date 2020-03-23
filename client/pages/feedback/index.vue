<template >
    <v-container fluid class="px-md-2 px-0 ">
        <div class="page_area d-flex footer_padding" >
            <left-menu page="feedback"></left-menu >
            <v-container fluid class="pa-0 " >
                <div class="d-block d-md-none">
                    <h1 class="bold pl-md-2 pl-5" >
                        Отзывы
                    </h1 >
                    <feedback-form :bars="bars"></feedback-form>
                </div>
                <div class="pl-md-5 pl-0 pt-3" >
                    <h1 class="bold pl-md-2 pl-5 d-none d-md-block" >
                        Отзывы
                    </h1 >
                    <template v-for="item in show_feedbacks">
                        <feedback-item :feedback="item"></feedback-item >
                        <v-divider class="d-block d-md-none"></v-divider>
                    </template>

                    <v-btn class="ma-2 bold px-10 d-none d-md-flex" outlined tile color="#CE8714" @click="show_num = show_num+3">
                        Показать ещё
                    </v-btn>
                    <v-btn class="mx-auto my-10 bold px-10 d-md-none d-flex" outlined tile color="#CE8714" >
                        Показать ещё
                    </v-btn>
                </div >
                <div class="d-md-block d-none">
                <feedback-form :bars="bars"></feedback-form>
                </div>
            </v-container >
        </div >

    </v-container >
</template >

<script >
    import { mapGetters } from 'vuex'
    import leftMenu from '@/layouts/left-menu'
    import feedbackItem from '@/components/feedback/feedback-item'
    import feedbackForm from '@/components/feedback/feed-back-form'

    export default {
        name: "index",
        components: {
            leftMenu,
            feedbackItem,
            feedbackForm
        },
        data () {
            return {
                show_num: 3,
            }
        },
        async fetch ({ store }) {
            await store.dispatch('fetchBars', '?active=True');
            await store.dispatch('fetchFeedback', '?active=True')
        },
        computed: {
            ...mapGetters(['bars', 'getFeedbaks']),
            show_feedbacks () {
                return this.getFeedbaks.slice(0, this.show_num)
            }
        }
    }
</script >

<style scoped >
    * {
        text-transform: none !important;
    }
</style >