<template >
    <v-row >
        <template v-for="item in promos" >
            <promo-list-item :promo="item" ></promo-list-item >
        </template >
    </v-row >
</template >

<script >
    import promoListItem from '../../components/promotion/promo-list-item'

    export default {
        name: "promo-list",
        components: {
            promoListItem
        },
        props: ['promos']
    }
</script >

<style scoped >

</style >