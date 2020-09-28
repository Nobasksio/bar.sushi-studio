<template >
    <v-app >
	    <div class="feedbacks-wrapper">
			<v-container class="feedbacks-container">
				<feedbacks-header></feedbacks-header>
			    <nuxt />
			</v-container>
	    </div>
    </v-app >
</template >

<script >
	import feedbacksHeader from './feedbacks-header'
    export default {
        name: "feedbacks.vue",
        components: {
            feedbacksHeader
        },
	}
</script >

<style scoped >
	.feedbacks-wrapper {
		background-color: #ececec;
		height: 100%;
	}
	.feedbacks-container {
		max-width: 270px;
	}
</style >