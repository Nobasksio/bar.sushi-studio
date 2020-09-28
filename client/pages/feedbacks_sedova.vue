<template >
	<div class="buttons">
	    <a v-for="(btn, index) of buttons" class="btn" :href="btn.url" v-ripple @click="clickHandle(btn.url)" ><img :src="btn.icon" alt="" /></a>
	</div>
</template >

<script >
	import Vue from 'vue'
	import Ripple from 'vue-ripple-directive'
	Vue.directive('ripple', Ripple);
    export default {
	    layout: "feedbacks",
        name: "feedbacks_sedova",
        data: () => ({
	        buttons: [
		        {
			        icon: "/image/gmaps.svg",
			        url: "https://www.google.ru/maps/place/Sushi+studio/@52.2744809,104.2715668,14z/data=!4m8!1m2!2m1!1zc3VzaGktc3R1ZGlvINGB0YPRiNC4LdCx0LDRgA!3m4!1s0x5da83bd8e9316d61:0xa706c1cd4a25be51!8m2!3d52.2744809!4d104.2890763?hl=ru",
		        },
		        {
			        icon: "/image/2gis.svg",
			        url: "https://2gis.ru/irkutsk/branches/1548649242950744/firm/70000001035151578/104.288959%2C52.274465/tab/reviews",
		        },
		        {
			        icon: "/image/tripadvisor.svg",
			        url: "https://www.tripadvisor.ru/Restaurant_Review-g298527-d15669618-Reviews-Sushi_Studio-Irkutsk_Irkutsk_Oblast_Siberian_District.html",
		        },
		        {
			        icon: "/image/yandex.svg",
			        url: "https://yandex.ru/maps/-/CCQ3q2E6hC",
		        },
	        ]
        }),
		methods: {
		    clickHandle(url) {
		      window.location.href = url;
		    },
		},
    }
</script >

<style scoped >
	.btn {
		display: flex;
		height: 43px;
		background-color: #fff;
		justify-content: center;
		border-radius: 10px;
		margin-bottom: 14px;
	}
</style >