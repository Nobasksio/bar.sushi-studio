<template >
    <v-col cols="12" md="6" lg="4">
        <v-hover >
            <template v-slot="{ hover }" >
                <v-card
                        flat
                        class="pa-2"
                        :class="`elevation-${hover ? 12 : 0}`"
                        :to="'/promotion/'+promo.id"
                >
                    <v-img :src="'http://185.22.61.189:1337'+promo.preview.url"
                           alt=""
                           width="100%"

                           class="" ></v-img >
                    <div class="pb-2 bold pt-4" >{{promo.name}}</div >
                    <div class="promotion_description pb-3" >
                        <span v-html="promo.short_description"></span>
                    </div >
                </v-card >
            </template >
        </v-hover >
    </v-col >
</template >

<script >
    export default {
        name: "promo-list-item",
        props:['promo'],
        data(){
            return{
                promotion:{
                    id:1
                }
            }
        }
    }
</script >

<style scoped >
    .promotion_description {
        font-size: 14px;
    }

</style >