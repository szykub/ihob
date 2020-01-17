<template>
	<div class="about__wrapper">
		<div class="about__wrapper--left">
			<span class="title">{{$t('aboutproduct')}}</span>
			<span class="what" v-html="$t('whatis')" />
			<span class="desc" v-html="$t('system2')" />
		</div>
		<div class="about__wrapper--right">
			<div class="image">
				<img src="../assets/images/about-image.png" />
			</div>
			<div class="asset">
				<img svg-inline src="../assets/assets/car-icon.svg" />
			</div>
			<div class="box">
				<h1>{{$t('name')}}</h1>
				<span>{{$t('aboutdesc')}}</span>
			</div>
			<div class="video">
				<div class="play" @click="openVideo">
					<img svg-inline src="../assets/assets/triangle.svg" />
				</div>
				<span>{{$t('seevideo')}}</span>
			</div>
			<img src="../assets/assets/about-dots.svg" class="dots"/>
		</div>
	</div>
</template>

<script>
  export default {
		name: 'About',
		methods: {
			openVideo() {
				window.open('https://www.youtube.com/watch?v=6VPysNGDKi0', 'blank')
			}
		}
  };
</script>

<style lang="scss">
	.about__wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		&--left {

			padding: 200px 5%;
			width: 40%;

			& .title {
				padding: 10px 0;
				font-weight: bold;
				font-size: 30px;
				color: #129BDB;
				display: block;
				text-transform: uppercase;
			}

			& .what {
				padding: 10px 0;
				font-size: 56px;
				font-weight: bold;
				color: #333333;
				display: block;
			}

			& .desc {
				padding: 30px 0;
				color: #333333;
				font-size: 18px;
				display: block;
				width: 55%;

				& b {
					font-weight: bold;
				}
			}
		}

		&--right {
			padding: 200px 0;
			position: relative;
			height: 100%;
			width: 40%;

			& .image {
				position: relative;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
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
				top: 30%;
				left: 13%;
			}

			& .box {
				position: absolute;
				width: 370px;
				right: 14%;
				bottom: 12%;
				background: #fff;
				box-shadow: 10px 10px 30px #0000001A;
				padding: 50px;
				border-radius: 16px;

				& h1{
					font-size: 40px;
					font-weight: bold;
					color: #333;
				}

				& span {
					font-size: 18px;
					color: #333;
				}
			}

			& .video {
				cursor: pointer;

				& .play{
					width: 80px;
					height: 80px;
					border-radius: 150px;
					background: #124EDB;
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					right: 20%;
					bottom: 10%;
				}

				& span {
					position: absolute;
					right: 16%;
					bottom: 5%;
					font-weight: bold;
					font-size: 24px;
					color: #333333;
				}
			}

			& .dots {
				position: absolute;
				right: 1%;
				top: 35%;
				z-index: -1;
			}
		}
	}

	@media (max-width: 600px) {
		.about__wrapper {
			flex-direction: column;

			&--left {
				padding: 10px;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				& .desc {
					width: 70%;
				}
			}

			&--right {
				padding: 10px;
				width: 100%;

				& .asset {
					top: 35%;
					z-index: 5;
				}

				& .box {
					right: calc(50% - 370px / 2)
				}

				& .video {
					& .play {
						bottom: 46%;
					}

					span {
						right: 10%;
						bottom: 40%;
					}
				}
			}
		}
	}

</style>
