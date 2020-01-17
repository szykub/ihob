<template>
	<div class="partners__wrapper">
		<div class="partners__wrapper--header">
			<span>{{$t('partnership')}}</span>
			<h1>{{$t('ourpartners')}}</h1>
		</div>
		<div class="partners__wrapper--grid">
			<div class="box">
				<img src="../assets/images/cadm.png" />
			</div>
			<div class="box">
				<img src="../assets/images/politechnika.png" />
			</div>
			<div class="box">
				<img src="../assets/images/pimot.png" />
			</div>
			<div class="box">
				<img src="../assets/images/pimot.png" />
			</div>
			<div class="box">
				<img src="../assets/images/pimot.png" />
			</div>
			<div class="box">
				<img src="../assets/images/pimot.png" />
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		name: 'Partners',
  };
</script>

<style lang="scss">
	.partners__wrapper{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 200px 0;

		&--header {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 100px 0;

			& span {
				font-size: 30px;
				font-weight: bold;
				color: #129BDB;
				text-transform: uppercase;
			}

			& h1 {
				width: 100%;
				text-align: center;
				font-size: 56px;
				font-weight: bold;
				color: #333333;
				position: relative;

				&::after {
					content: '';
					left: 10px;
					top: calc(50% - 15px / 2);
					position: absolute;
					z-index: -1;
					height: 15px;
					width: 145px;
					background: #129BDB40;
				}
			}
		}

		&--grid {
			display: grid;
			width: 70%;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 20px;

			& .box {
				width: 100%;
				cursor: pointer;
				padding: 80px 0;
				height: 100%;
				background: #f7f7f7;
				border-radius: 15px;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	@media (max-width: 600px) {
		.partners__wrapper{
			padding-top: 50px;

			&--header {
				padding: 15px 0;

				& span {
					text-align: center;
				}

				& h1{

					&::after{
						left: 80px;
						top: calc(50% - 65px / 2);
					}
				}
			}

			&--grid {
				grid-template-columns: 1fr
			;
			}
		}
	}
</style>
