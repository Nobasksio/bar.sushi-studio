<template>
    <div class="bar_page">
        <v-card flat class="pb-10">
            <v-carousel class="my-slider"
                    show-arrows-on-hover
                    hide-delimiters
                    height="100%">
                <v-carousel-item
                    v-for="item in bar.photo"
                    :key="item.id"
                    ripple
                    :src="getApiBaseUrl + item.url"
                >
                </v-carousel-item >
                <v-carousel-item v-if="!bar.photo.length">
                    <v-sheet
                            color="blue lighten-1'"
                            height="400px"
                            tile
                    >
                        <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                        >
                            <div class="display-3">Скоро будут фото</div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item >
            </v-carousel >
        </v-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "photoComponent",
        props: {
            bar: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapGetters(['getApiBaseUrl'])
        }
    }
</script>

<style scoped>
    @media (min-width: 1200px) {
        .my-slider {
            max-width: 881px;
        }
    }

    @media (max-width: 1200px) {
        .my-slider {
            max-width: 800px;
        }
    }
</style>
