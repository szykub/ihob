<template>
	<div class="howitworks__wrapper">
		<div class="top">
			<span>{{$t('info')}}</span>
			<h1>{{$t('howitworks')}}</h1>
		</div>
		<div class="content">
			<div class="left"></div>
			<div class="right">
				<span class="text" v-html="$t('warningonroad')"/>
				<span class="text" v-html="$t('sensor')"/>
				<h2>{{$t('ultimately')}}</h2>
				<ul>
					<li>{{$t('option')}}</li>
					<li>{{$t('comunicate')}}</li>
					<li>{{$t('pedestrian')}}</li>
				</ul>
				<div class="icons">
					<div class="item car" @click="openVideo('car')">
						<div class="car-icon"></div>
						<div class="play yellow"></div>
						<span>{{$t('drivermovie')}}</span>
					</div>
					<div class="item guy" @click="openVideo('human')">
						<div class="guy-icon"></div>
						<div class="play green"></div>
						<span>{{$t('humanmovie')}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="about_product">
			<div class="left">
				<h1 class="blue">{{$t('aboutproduct')}}</h1>
				<span class="header">{{$t('parts')}}</span>
				<span class="title green">{{$t('przejscie')}}</span>
				<span class="desc">{{$t('sensor2')}}</span>
				<span class="text">{{$t('cechy')}}</span>
				<ul class="greenBefore">
					<li>{{$t('d6sign')}}</li>
					<li>{{$t('invasive')}}</li>
					<li>{{$t('independent')}}</li>
					<li>{{$t('weatherresistant')}}</li>
					<li>{{$t('fastinstallation')}}</li>
				</ul>
			</div>
			<div class="right">
				<img src="../assets/images/hiw-asset1.png" />
			</div>
		</div>
		<div class="about_product second">
			<div class="right">
				<img src="../assets/images/hiw-asset2.png" />
			</div>
			<div class="left">
				<span class="title orange">{{$t('cockpit')}}</span>
				<span class="desc">{{$t('carsensor')}}</span>
				<span class="text">{{$t('carsensordetails')}}</span>
				<ul class="greenBefore">
					<li>{{$t('safe')}}</li>
					<li>{{$t('non-invasive')}}</li>
					<li>{{$t('carindependent')}}</li>
					<li>{{$t('carweather')}}</li>
					<li>{{$t('carfast')}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		name: 'HowItWorks',
		methods: {
			openVideo(person) {
				const videos = {
					car: 'https://www.youtube.com/watch?v=oBrs0dmg0hs',
					human: 'https://www.youtube.com/watch?v=YbsIZ7t1Gio'
				}

				window.open(videos[person], 'blank')
			},
		}
  };
</script>

<style lang="scss">
	.howitworks__wrapper{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		& .top {
			text-align: center;
			padding-bottom: 150px;
			& span {
				font-weight: bold;
				font-size: 30px;
				letter-spacing: 0;
				color: #129BDB;
				text-transform: uppercase;
			}

			& h1 {
				font-weight: bold;
				font-size: 56px;
				color: #333333;
			}
		}

		& .content {
			width: 100%;
			background-image: url("../assets/images/hiw.png");
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			display: flex;

			& .left {
				width: 50%;
			}

			& .right {
				padding: 65px 50px 0 50px;
				width: 40%;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				flex-direction: column;

				& .text {
					text-align: left;
					font-size: 18px;
					color: #FFFFFF;
					padding: 30px 0;

					& .green {
						color: #417505;
					}

					& .orange {
						color: #F5A623;
					}
				}

				& h2 {
					font-weight: bold;
					font-size: 18px;
					color: #FFFFFF;
				}

				& ul {
					list-style: none;
					padding: 0;
					margin: 0;

					& li {
						color: #FFFFFF;
						font-size: 18px;
						text-shadow: 0px 3px 6px #00000029;
						padding: 5px 18px;

						&:before{
							content: '■';
							padding-right: 8px;
							color: #fff;
						}
					}
				}
			}

			.icons {
				display: flex;
				justify-content: flex-start;

				.item {
					width: 50%;
					display: grid;
					grid-template-columns: 80px 1fr;
					grid-template-rows: 1fr 1fr;

					& .guy-icon, .car-icon{
						width: 100%;
						grid-column-start: 1;
						grid-column-end: 3;
					}

					& .play {
						width: 66px;
						height: 66px;
						border-radius: 150px;
						background-image: url("../assets/assets/triangle.svg");
						background-size: 15px 15px;
						background-repeat: no-repeat;
						background-position: center;
					}

					& .yellow {
						background-color: #F5A623
					}

					& .green {
						background-color: #417505;
					}

					& span {
						font-weight: bold;
						font-size: 18px;
						align-self: center;
						color: #FFFFFF;
					}
				}
			}
		}

		.about_product {
			width: 100%;
			background: #121920;
			padding: 250px 50px;
			display: flex;
			justify-content: center;

			& .left {
				width: 30%;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;

				& h1 {
					padding: 10px 0;
					font-weight: bold;
					font-size: 30px;
					color: #129BDB;
					text-transform: uppercase;
				}

				& .header {
					padding: 10px 0;
					font-weight: bold;
					font-size: 56px;
					color: #FFFFFF;
				}

				& .title {
					padding: 20px 0;
					font-weight: bold;
					font-size: 30px;
					color: #417505;
					text-transform: uppercase;
				}

				& .desc {
					width: 70%;
					padding: 20px 50px 20px 0;
					font-weight: bold;
					font-size: 24px;
					color: #FFFFFF;
				}

				& .text {
					padding: 20px 0;
					font-size: 18px;
					color: #FFFFFF;
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
							color: #417505;
						}
					}
				}
			}

			& .right {
				width: 50%;
				display: flex;
				justify-content: center;
				align-items: center;

				& img {
					width: 80%;

				}
			}
		}

		& .second {
			padding-top: 0;

			& .left {

				& .orange {
					color: #F5A623;
				}

				& ul {

					& li {

						&:before{
							color: #F5A623;
						}
					}
				}
			}

			& .right {
				justify-content: flex-start;
			}
		}
	}

	@media (max-width: 600px) {
		.howitworks__wrapper{
			padding-top: 50px;

			& .top {
				padding-bottom: 50px;
			}

			& .content {
				flex-direction: column;
				& .left, & .right {
					width: 100%;
					padding: 30px 10px;
				}

				& .icons {

					& .item {
						padding-top: 50px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						& span {
							padding-top: 10px;
							text-align: center;
							font-size: 14px;
						}
					}
				}
			}

			& .about_product {
				padding: 0;
				flex-direction: column;

				& .left, & .right {
					width: 100%;
					padding: 30px 10px;
				}

				& .left {

					& .desc {
						width: 100%;
						text-align: center;
						padding: 20px 5px;
					}

					& .title {
						width: 100%;
						text-align: center;
					}
				}
			}
		}
	}
</style>
