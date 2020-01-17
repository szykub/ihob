<template>
	<div class="union__wrapper">
		<img id="asset" src="../assets/assets/unionshapes.svg" />
		<img id="year" src="../assets/assets/2022.svg" />
		<div class="left">
			<img src="../assets/images/union.png" />
		</div>
		<div class="right">
			<h1>{{$t('union202')}}</h1>
			<h1>{{$t('union2022')}}</h1>
			<span class="text">
				{{$t('union2022text')}}
			</span>
			<span class="text">
				{{$t('7years')}}
			</span>
		</div>
	</div>
</template>

<script>
  export default {
		name: 'Union',
  };
</script>

<style lang="scss">
	.union__wrapper {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		padding-bottom: 250px;
		padding-top: 70px;

		& #asset {
			width: 10%;
			position: absolute;
			top: 2%;
			z-index: -1;
			left: 42%;
		}

		& #year {
			position: absolute;
			bottom: 0;
			width: 40%;
			left: 30%;
		}

		& .left{
			width: 50%;

			& img {
				width: 100%;
			}
		}

		& .right {
			width: 40%;
			padding: 0 5%;

			& h1 {
				display: block;
				font-weight: bold;
				font-size: 56px;
				margin: 0;
				color: #333333;
			}

			& .text {
				display: block;
				padding-top: 50px;
				font-size: 18px;
				color: #333333;
			}
		}
	}

	@media (max-width: 600px) {

		.union__wrapper{
			padding-top: 20px;
			padding-bottom: 50px;
			flex-direction: column;

			& #asset, & #year{
				display: none;
			}

			& .left, & .right {
				width: 100%;
				padding: 30px 10px;
			}

			& .right {

				& h1 {
					width: 100%;
					text-align: center;
				}
			}
		}

	}
</style>
