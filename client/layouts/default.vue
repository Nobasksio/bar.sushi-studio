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
    const axios = require('axios').default;
    export default {
        name: "default.vue",
        components: {
            topMenu,
            myFooter
        },
        data(){
            return {
                bars:[{Name:'',phone:''}]
            }
        },
        computed:{
            show_bar(){
                if (this.$route.name =='bar-id' || this.$route.name =='index'){
                    return true
                }

                return false
            }
        },
        mounted: function(){
            axios.get(`http://185.22.61.189:1337/bars/`)
                .then((res) => {
                    this.bars = res.data;
                })
        }
    }
</script >

<style scoped >

</style >