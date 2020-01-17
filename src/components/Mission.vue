<template>
	<div class="mission_wrapper">
		<h1>{{$t('tasks')}}</h1>
		<div class="round">
			<div class="elem one">
				<span>{{$t('warncar')}}</span>
			</div>
			<div class="elem two">
				<span>{{$t('warnwalk')}}</span>
			</div>
			<div class="elem three">
				<span>{{$t('warntrain')}}</span>
			</div>
			<div class="elem four">
				<span>{{$t('warntrain2')}}</span>
			</div>
			<div class="elem five">
				<span>{{$t('warndrivers')}}</span>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		name: 'Mission'
  };
</script>

<style lang="scss">
	.mission_wrapper {
		width: 100%;
		padding-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		& h1 {
			font-weight: bold;
			font-size: 56px;
			color: #333333;
		}

		& .round{
			width: 50%;
			margin-top: 100px;
			padding-bottom: 40px;
			background-image: url("../assets/assets/bg-circles.svg");
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			grid-gap: 40px 0;

			& .elem {
				justify-self: center;
				align-self: center;
				width: 190px;
				height: 190px;
				border-radius: 100px;
				box-shadow: 20px 20px 40px #0000001A;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 20px;
				text-align: center;
				font-size: 14px;
				color: #333;
				background: #fff;
			}

			& .four {
				justify-self: flex-end;
				margin-right: -95px
			}

			& .five {
				margin-left: -95px;
				grid-column-start: 3;
				grid-column-end: 4;
				justify-self: flex-start;
			}
		}
	}

	@media (max-width: 600px) {
		.mission_wrapper {

			& h1{
				width: 100%;
				font-size: 40px;
				text-align: center;
			}

			& .round {
				grid-template-columns: 1fr;
				width: 100%;
				grid-template-rows: initial;
				background: none;

				& .elem {
					grid-column-start: initial;
					grid-column-end: initial;
				}

				& .four, & .five{
					margin: 0;
					justify-self: center;
				}
			}
		}
	}
</style>
