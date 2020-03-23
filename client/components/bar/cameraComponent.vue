<template>
    <div v-html="bar.camera"></div>
</template>

<script>
    export default {
        name: "cameraComponent",
        props: {
            bar: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>