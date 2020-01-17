<template>
	<div class="header__wrapper" :class="{scrolled}">
		<div class="header__wrapper--logo" @click="scrollToStart">
			<img svg-inline src="../assets/assets/logo.svg" />
		</div>
		<div class="header__wrapper--contact">
			<div class="socials">
				<img src="../assets/assets/facebook.svg" @click="handleSocial('facebook')"/>
				<img src="../assets/assets/twitter.svg" @click="handleSocial('twitter')"/>
				<img src="../assets/assets/instagram.svg" @click="handleSocial('instagram')"/>
				<img src="../assets/assets/linkedin.svg" @click="handleSocial('linkedin')"/>
			</div>
			<div class="contact">
				<span>tel. +48 531 846 090</span>
				<span>info@ihob.life</span>
			</div>
			<div class="translations">
				<span @click="handleTranslation('pl')">PL</span>
				<div></div>
				<span @click="handleTranslation('en')">EN</span>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		name: 'Header',
		data() {
// eslint-disable-next-line no-mixed-spaces-and-tabs
		  return {
// eslint-disable-next-line no-mixed-spaces-and-tabs
		    scrolled: false,
			}
		},
		methods: {
      handleScroll(){
        this.scrolled = window.scrollY > 0;
			},
			scrollToStart() {
				document.querySelector('.title__wrapper').scrollIntoView({
					behavior: 'smooth'
				});
			},
      handleTranslation(name) {
        this.$i18n.locale = name;
			},// eslint-disable-next-line no-mixed-spaces-and-tabs
			handleSocial(name) {// eslint-disable-next-line no-mixed-spaces-and-tabs
      	const socials = {// eslint-disable-next-line no-mixed-spaces-and-tabs
      		facebook: 'https://www.facebook.com/IHob-in-Honor-of-profesor-Boleslaw-Jankowiak-107104914114204/',// eslint-disable-next-line no-mixed-spaces-and-tabs
					linkedin: 'https://www.linkedin.com/showcase/ihob/',
				}

				if (socials[name]) {
					window.open(socials[name], 'blank')
				}
			},
		},
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>

<style lang="scss">
	.header__wrapper{
		position: fixed;
		top: 0;
		z-index: 100;
		width: 100vw;
		height: 150px;
		padding: 20px 70px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		background: rgba(0, 0, 0, 0.4);
		transition: all ease .3s;

		&.scrolled{
			height: 100px;
			padding: 5px 20px;

			& .header__wrapper--contact{
				align-self: center;
			}
		}

		&--logo {
			width: 15%;
			cursor: pointer;
			height: 100%;
			& img {
				width: 80%;
				height: auto;
			}
		}

		&--contact {
			transition: all ease .3s;
			width: 50%;
			display: flex;
			justify-content: space-around;
			padding-right: 100px;

			& .socials {
				display: flex;
				align-items: center;

				& img {
					cursor: pointer;
					margin: 0 20px;
				}
			}

			& .contact {
				font-size: 14px;
				display: flex;
				align-items: center;

				& span {
					font-size: 14px;
					color: #FFFFFF;
					padding: 0 15px;
				}
			}

			& .translations {
				display: flex;
				align-items: center;

				& span {
					color: #fff;
					padding: 0 10px;
					position: relative;
					cursor: pointer;
				}

				& div {
					width: 1px;
					background: #fff;
					height: 12px;
				}
			}
		}
	}

	@media (max-width: 600px) {
		.header__wrapper {
			height: 100px;
			padding: 5px 10px;

			&.scrolled {
				padding: 5px 10px;
			}

			& .header__wrapper--contact{
				align-self: flex-start;
			}

			&--logo {
				display: flex;
				align-items: center;
				justify-items: center;
				width: 40%;

				& img {
					justify-self: center;
					align-self: center;
				}
			}

			&--contact {
				width: 60%;
				height: 100%;
				align-items: center;
				flex-direction: row;
				padding-right: 0;

				& .socials {
					display: none;
					flex-direction: column;

					& img {
						margin: 0;
					}
				}

				& .contact {
					align-items: flex-start;
					justify-items: center;
					flex-direction: column;

					& span {
						font-size: 12px;
					}
				}
			}
		}
	}
</style>
