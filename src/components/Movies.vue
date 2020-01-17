<template>
	<div class="movies__wrapper">
		<h1>{{$t('learnmore')}}</h1>
		<div class="grid">
			<div class="movie">
				<div class="frame">
					<iframe src="https://www.youtube.com/embed/6VPysNGDKi0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="controls">
						<span>{{$t('time')}} 1:07</span>
					</div>
				</div>
				<span class="title">iHob – kierowca/pieszy</span>
			</div>
			<div class="movie">
				<div class="frame">
					<iframe src="https://www.youtube.com/embed/oBrs0dmg0hs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="controls">
						<span>{{$t('time')}} 0:38</span>
					</div>
				</div>
				<span class="title">iHob – kierowca / kabina samochodu / DZIEŃ</span>
			</div>
			<div class="movie">
				<div class="frame">
					<iframe src="https://www.youtube.com/embed/_FFU4JDl_Sw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="controls">
						<span>{{$t('time')}} 0:46</span>
					</div>
				</div>
				<span class="title">iHob – pieszy na przejściu / NOC</span>
			</div>
			<div class="movie">
				<div class="frame">
					<iframe src="https://www.youtube.com/embed/8npYNQMi_po" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="controls">
						<span>{{$t('time')}} 0:43</span>
					</div>
				</div>
				<span class="title">iHob – Kierowca/Kabina samochodu – NOC)</span>
			</div>
			<div class="movie">
				<div class="frame">
					<iframe src="https://www.youtube.com/embed/YVzqecBvUXc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="controls">
						<span>{{$t('time')}} 10:00</span>
					</div>
				</div>
				<span class="title">{{$t('topic')}}</span>
			</div>
			<div class="movie">
				<div class="frame">
					<iframe src="https://www.youtube.com/embed/eEnklD0Vs4A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="controls">
						<span>{{$t('time')}} 1:23</span>
					</div>
				</div>
				<span class="title">Testy systemów ochrony pieszych</span>
			</div>
			<div class="movie">
				<div class="frame">
					<iframe src="https://www.youtube.com/embed/G2h2KC1rB7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="controls">
						<span>{{$t('time')}} 2:33</span>
					</div>
				</div>
				<span class="title">Kampania Dziecko/Tir</span>
			</div>
			<div class="movie">
				<div class="frame">
					<iframe src="https://www.youtube.com/embed/YVzqecBvUXc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="controls">
						<span>{{$t('time')}} 10:00</span>
					</div>
				</div>
				<span class="title">{{$t('topic')}}</span>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		name: 'Movies',
  };
</script>

<style lang="scss">
	.movies__wrapper {
		width: 100%;
		padding: 50px 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& h1 {
			text-align: center;
			width: 30%;
			font-weight: bold;
			font-size: 56px;
			color: #333333;
		}

		& .grid {
			padding: 70px 0;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 50px;

			& .movie {
				width: 100%;
				height: 100%;
				position: relative;
				border-bottom: 1px solid lightgray;

				& .frame {
					width: 420px;
					height: 330px;
					overflow: hidden;
					position: relative;

					& iframe {
						overflow: hidden;
						width: 100%;
						height: 100%;
					}
				}

				& .controls {
					position: absolute;
					bottom: 0;
					left: 0;
					padding: 20px;
					width: 100%;
					background: #000;
					border-radius: 15px;

					& span {
						text-align: left;
						font-size: 21px;
						color: #FFFFFF;
					}
				}

				& .title{
					padding: 30px;
					font-weight: bold;
					font-size: 18px;
					display: block;
					color: #333333;
				}
			}
		}
	}

	@media (max-width: 600px) {
		.movies__wrapper {
			padding: 50px 20px;

			& h1 {
				width: 100%;
				text-align: center;
			}

			& .grid {
				grid-template-columns: 1fr;

				& .movie {

					& .frame {
						width: 100%;
					}
				}
			}
		}
	}
</style>
