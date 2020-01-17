<template>
	<div class="information__wrapper">
		<div class="header">
			<span class="info">{{$t('info')}}</span>
			<h1>{{$t('whatfor')}}</h1>
			<span class="text" v-html="$t('world')" />
		</div>
		<div class="map">
			<div class="item states">
				<span class="item_header">{{$t('states')}}</span>
				<div>
					<span class="blue">{{$t('statesnumber')}}</span>
					<span class="text" v-html="$t('statesyearly')"/>
				</div>
			</div>
			<div class="item union">
				<span class="item_header">{{$t('union')}}</span>
				<div>
					<span class="blue">{{$t('unionnumber')}}</span>
					<span class="text" v-html="$t('unionyearly')"/>
				</div>
			</div>
			<img src="../assets/images/insidecar.png" />
		</div>
		<div class="video">
			<div class="head">
				<span class="text" v-html="$t('uniondesc')"/>
				<span class="text" v-html="$t('statesdesc')"/>
				<span class="blue">{{$t('resolveproblem')}}</span>
			</div>
			<div class="yt">
				<iframe width="1100" height="620" src="https://www.youtube.com/embed/YVzqecBvUXc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<img svg-inline src="../assets/assets/video-bg.svg" />
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Information'
  };
</script>

<style lang="scss">
	.information__wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 100px 0;

		& .header {
			width: 60%;
			display: grid;
			grid-template-columns: 300px 1fr;
			grid-template-rows: 100px 1fr;

			& .info {
				font-weight: bold;
				font-size: 30px;
				color: #129BDB;
				align-self: flex-end;
				text-transform: uppercase;
			}

			& h1 {
				font-size: 56px;
				font-weight: bold;
				color: #333;
				grid-column-start: 1;
				grid-column-end: 2;
				grid-row-start: 2;
				grid-row-end: 3;
			}

			& .text {
				color: #333333;
				font-size: 30px;
				grid-column-start: 2;
				grid-column-end: 3;
				grid-row-start: 2;
				grid-row-end: 3;
				width: 60%;
				justify-self: flex-end;
				align-self: flex-end;

				& b {
					font-weight: bold;
				}
			}
		}

		& .map {
			margin-top: 100px;
			width: 60%;
			height: 600px;
			background-image: url("../assets/assets/map.svg");
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			position: relative;

			& .item {
				width: 250px;
				height: 220px;
				background-image: url("../assets/assets/pin.svg");
				background-size: auto;
				background-position: bottom center;
				background-repeat: no-repeat;

				&_header {
					position: absolute;
					top: 10px;
					font-size: 26px;
					color: #333;
					width: 100%;
					text-align: center;
				}

				& div {
					position: absolute;
					top: 34%;
					left: 39%;
					text-align: center;

					& .blue {
						color: #129BDB;
						display: block;
						font-size: 19px;
						font-weight: bold;
					}

					& .text {
						font-size: 14px;
						font-weight: bold;
						color: #333;
					}
				}
			}

			& .states {
				position: absolute;
				top: 5%;
				left: 13%;
			}

			& .union {
				position: absolute;
				top: 2%;
				left: 41%;
			}

			& img {
				position: absolute;
				left: 69%;
				top: 15%;
			}
		}

		& .video {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;


			& .head{
				padding: 30px 0;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				& .text {
					font-size: 30px;
					text-align: center;
					color: #333;

					& b {
						font-weight: bold;
					}
				}

				& .blue {
					padding: 40px 0;
					text-align: center;
					font-size: 42px;
					font-weight: bold;
					color: #129BDB;
				}
			}

			& .yt {
				padding: 40px 20px;
				position: relative;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 750px;

				& iframe {
					border-radius: 15px;
				}

				& img {
					position: absolute;
					right: 20%;
					bottom: 0;
					z-index: -1;
				}
			}

		}
	}

	@media (max-width: 600px) {
		.information__wrapper {
			padding-top: 20px;

			& .header {
				width: 100%;
				display: flex;
				flex-direction: column;

				& .info, & .text, & h1 {
					width: 90%;
					align-self: center;
					justify-self: center;
					text-align: center;
					padding: 10px 0;
				}

				& h1 {
					font-size: 30px;
				}

				& .text{
					font-size: 16px;
				}
			}

			& .video {

				& .head {

					& .text {
						font-size: 16px;
						padding: 0 10px;
					}

					& .blue{
						font-size: 30px;
						padding-left: 10px;
						padding-right: 10px;
						padding-bottom: 0;
					}
				}

			}

			& .map {
				display: none;
			}
		}
	}
</style>
