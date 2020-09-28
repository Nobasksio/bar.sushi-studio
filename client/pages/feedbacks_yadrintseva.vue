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
			        url: "https://www.google.ru/maps/place/Sushi-Studio+суши-бар/@52.2795585,104.3175955,14z/data=!4m8!1m2!2m1!1zc3VzaGktc3R1ZGlvINGB0YPRiNC4LdCx0LDRgA!3m4!1s0x5da83b74c9bb07b5:0x10c5c1e593b9bb52!8m2!3d52.2795585!4d104.335105?hl=ru",
		        },
		        {
			        icon: "/image/2gis.svg",
			        url: "https://2gis.ru/irkutsk/branches/1548649242950744/firm/1548641653432740/104.335027%2C52.279707/tab/reviews",
		        },
		        {
			        icon: "/image/flamp.svg",
			        url: "https://irkutsk.flamp.ru/addreview/1548641653432740",
		        },
		        {
			        icon: "/image/yandex.svg",
			        url: "https://yandex.ru/maps/-/CCQ3q2WnLB",
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