<template >
	<div class="feedbacks-header text-center">
		<div class="logo"><img src="/image/logo_feedbacks.svg" alt="Sushi-studio"></div>
		<h1>Мы рады, что ты выбрал наш суши-бар</h1>
		<h2>Ждем твой отзыв на удобной для тебя площадке:</h2>
	</div>
</template>
<script >
    export default {
        name: "feedbacksHeader",
	}
</script>

<style scoped >
	.feedbacks-header {
		padding-top: 30px;
		padding-bottom: 20px;
	}
	.logo {
		margin-bottom: 14px;
	}
	.logo img {
		width: 67px;
	}
	h1 {
		text-transform: uppercase;
		font-family: 'TT_Norms_bold';
		font-size: 17px;
	}
	h2 {
		font-size: 15px;
		font-weight: 400;
		letter-spacing: 1px;
	}
</style >