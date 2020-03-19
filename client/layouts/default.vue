<template >
    <v-app >

        <top-menu :bars="bars" :show_bar="show_bar"></top-menu >

                <v-container class="px-lg-2 px-0 pt-lg-2 pt-0">
                    <nuxt />
                </v-container>

        <my-footer ></my-footer >

    </v-app >
</template >

<script >
    import topMenu from './top-menu'
    import myFooter from './footer'

    export default {
        name: "default.vue",
        components: {
            topMenu,
            myFooter
        },
        data () {
            return {
                bars:[{Name:'',phone:''}]
            }
        },
        computed: {
            show_bar () {
                return this.$route.name === 'bar-id' || this.$route.name === 'index' || this.$route.name === 'bar-id-page_name';
            }
        },
        mounted () {
            this.$store.dispatch('fetchBars')
                .then(response => {
                    this.bars = response.data;
                })
                .catch(error => {
                    throw error
                });
        }
    }
</script >

<style scoped >

</style >