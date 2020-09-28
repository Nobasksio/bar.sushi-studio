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
			        url: "https://www.google.ru/maps/place/Sushi-Studio+суши-бар/@52.227216,104.2866807,14z/data=!4m8!1m2!2m1!1zc3VzaGktc3R1ZGlvINGB0YPRiNC4LdCx0LDRgA!3m4!1s0x5da83cfa224cbc6f:0xa93378e7c564816c!8m2!3d52.227216!4d104.3041902?hl=ru",
		        },
		        {
			        icon: "/image/2gis.svg",
			        url: "https://2gis.ru/irkutsk/branches/1548649242950744/firm/70000001017176671/104.304027%2C52.227155/tab/reviews",
		        },
		        {
			        icon: "/image/yandex.svg",
			        url: "https://yandex.ru/maps/-/CCQ3q-S~pC",
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