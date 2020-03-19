<template>
    <div v-html="bar.menu" ></div >
</template>

<script>
    export default {
        name: "menuComponent",
        props: {
            bar: { type: Object, required: true }
        }
    }
</script>

<style scoped>

</style>