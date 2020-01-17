<template>
	<div class="title__wrapper">
		<div class="title__wrapper--title">
			<span class="title">{{$t('systemname')}}</span>
			<span class="description" v-html="$t('system')">
			</span>
			<button class="button" @click="scrollToHow">{{$t('learnmore')}} <span>></span></button>
		</div>
		<div class="butterfly">
			<img svg-inline src="../assets/assets/butterfly.svg" />
		</div>
		<div class="scroll">
			<span>Scroll Down</span>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Title',
		methods: {
			scrollToHow() {
				document.querySelector('.howitworks__wrapper').scrollIntoView({
					behavior: 'smooth'
				});
			},
		}
  };
</script>

<style lang="scss">
	.title__wrapper{
		width: 100vw;
		height: 100vh;
		background-image: url("../assets/images/title-background.png");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-left: 320px;

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 2;
			background: #000;
			opacity: 0.55;
		}

		&--title {
			margin-top: -30px;
			position: relative;
			z-index: 5;

			& span {
				display: block;
			}

			& .title {
				letter-spacing: 7px;
				font-size: 28px;
				color: #129BDB;
			}

			& .description {
				font-weight: bold;
				font-size: 60px;
				color: #fff;
				padding: 40px 0 60px 0;
			}

			& .button{
				cursor: pointer;
				padding: 15px 30px;
				background: #000;
				font-size: 13px;
				color: #fff;
				letter-spacing: 0.7px;
				display: flex;
				font-weight: normal;

				& span {
					margin-left: 30px;
					color: #129BDB;
				}
			}
		}
		& .butterfly {
			position: absolute;
			z-index: 3;
			right: 250px;
			bottom: 100px;
			width: 30%;

			& img {
				width: 100%;
			}
		}

		& .scroll {
			position: absolute;
			height: 100px;
			bottom: 0;
			width: 200px;
			z-index: 5;
			display: flex;
			justify-content: center;
			text-transform: uppercase;
			left: calc(50% - 100px);
			font: Regular 14px/21px Poppins;
			letter-spacing: 3.5px;
			color: #FFF;
			opacity: 1;

			& span {
				position: absolute;
				bottom: 70px;
			}

			&:after {
				content: '';
				width: 1px;
				height: 20px;
				left: 50%;
				background: #fff;
				position: absolute;
				bottom: 0;
			}
		}
	}

	@media (max-width: 600px) {
		.title__wrapper {
			padding: 20px 0 0 0;

			&--title {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				margin-top: 10px;

				& .description {
					font-size: 22px;
				}
			}

			& .butterfly {
				display: none;
			}
		}
	}
</style>
