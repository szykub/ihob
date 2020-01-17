<template>
	<div class="innovation__wrapper">
		<div class="bg">
			<div class="overlay"></div>
			<div class="left">
				<h1>
					{{$t('innovative')}}
				</h1>
			</div>
			<div class="right">
				<span>{{$t('effective')}}</span>
				<ul>
					<li>{{$t('badconditions')}}</li>
					<li>{{$t('badvisibility')}}</li>
					<li>{{$t('truckdriver')}}</li>
					<li>{{$t('phonewatch')}}</li>
					<li>{{$t('disrupted')}}</li>
				</ul>
			</div>
		</div>
		<div class="car">
			<img src="../assets/images/car.png" id="car"/>
			<img svg-inline src="../assets/assets/car-asset.svg" class="car_asset" />
			<div class="asset">
				<img svg-inline src="../assets/assets/car-icon.svg" id="icon" />
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		name: 'Innovation'
  };
</script>

<style lang="scss">
	.innovation__wrapper{
		width: 100%;
		height: 1300px;
		position: relative;

		& .bg {
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			background-image: url("../assets/images/innovation-bg.png");
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			width: 100%;
			height: 1126px;


			& .overlay {
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.4);
				position: absolute;
				z-index: 1;
			}

			& .left {
				position: relative;
				z-index: 2;
				width: 50%;
				align-self: flex-start;
				padding: 150px 100px;
				display: flex;
				justify-content: flex-end;

				& h1 {
					width: 70%;
					text-align: left;
					font-weight: bold;
					font-size: 56px;
					color: #FFFFFF;
					text-shadow: 0px 6px 9px #00000073;
				}
			}

			& .right {
				position: relative;
				z-index: 2;
				width: 50%;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				flex-direction: column;

				& span {
					font-size: 24px;
					font-weight: bold;
					color: #FFFFFF;
					text-shadow: 0px 3px 6px #00000029;
					padding: 10px 0;
				}

				& ul {
					list-style: none;
					padding: 0;
					margin: 0;

					& li {
						color: #FFFFFF;
						font-size: 18px;
						text-shadow: 0px 3px 6px #00000029;
						padding: 5px 0;

						&:before{
							content: '■';
							padding-right: 8px;
							color: #129BDB;
						}
					}
				}
			}
		}
		& .car{
			position: absolute;
			bottom: 0;
			z-index: 2;
			left: -15%;
			width: 80%;

			#car {
				width: 100%;
			}

			& .car_asset {
				position: absolute;
				top: 12%;
				right: 30%;
			}

			& .asset{
				position: absolute;
				width: 100px;
				height: 100px;
				border-radius: 10px;
				background: #129BDB;
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow: 10px 10px 20px #00000040;
				top: 26%;
				right: 21%;
			}
		}
	}

	@media (max-width: 600px) {
		.innovation__wrapper {
			height: initial;

			& .car {
				display: none;
			}

			.bg {
				flex-direction: column;
				justify-content: flex-start;

					& .left, & .right {
						width: 100%;
						padding: 30px 0;
					}

				& .left {
					padding-top: 100px;
					& h1 {
						width: 100%;
						padding: 0 10px;
						font-size: 36px;
					}
				}

				& .right {
					padding-top: 100px;
					& span {
						width: 100%;
						text-align: center;
					}

					& ul {
						padding: 0 10px;

						& li {
							font-size: 16px;
						}
					}
				}
			}
		}
	}
</style>
