<template>
	<div class="footer_wrapper">
		<div class="top_wrapper">
			<div class="logo">
				<img src="../assets/assets/logowotext.svg" />
				<span>{{$t('aboutdesc')}}</span>
			</div>
			<div class="email">
				<h2>Email</h2>
				<span>info@ihob.life</span>
			</div>
			<div class="address">
				<h2>Address</h2>
				<span>iRoot Inc, 541 Jefferson Avenue,</span>
				<span>Suite 100 Redwood City, CA 94063,</span>
				<span>United States</span>
			</div>
			<div class="phone">
				<h2>Phone</h2>
				<span>+48 531 846 090</span>
			</div>
		</div>
		<div class="bottom_wrapper">
			<div class="socials">
				<div class="facebook">
					<img src="../assets/assets/facebook.svg" />
				</div>
				<div class="twitter">
					<img src="../assets/assets/twitter.svg" />
				</div>
				<div class="instagram">
					<img src="../assets/assets/instagram.svg" />
				</div>
			</div>
			<span>Copyright © 2019. All Rights Reserved. Zgłoszenie patentowe</span>
		</div>
	</div>
</template>

<script>
  export default {
		name: 'Footer',
  };
</script>

<style lang="scss">
	.footer_wrapper {
		background: #1a1a1a;
		padding: 50px 250px 20px 250px;

		& .top_wrapper {
			width: 100%;
			padding: 50px 0;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			border-bottom: 1px solid #707070;


			& .logo {
				width: 25%;

				& span {
					padding-top: 50px;
				}
			}

			& .logo, .email, .address, .phone {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				& span {
					font-size: 18px;
					color: #FFFFFF80;
				}

				& h2 {
					font-size: 18px;
					color: #FFFFFF;
					padding: 20px 0;
				}
			}

			& .email, .address, .phone {
				padding-top: 50px;
			}
		}

		& .bottom_wrapper {
			padding: 50px 0;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			& .socials {
				display: flex;

				& .facebook, .twitter, .instagram {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 48px;
					height: 48px;
					border-radius: 150px;
					border: 1px solid #FFFFFF;
					margin-left: 15px;
				}

				& .facebook {
					margin: 0;
				}
			}

			& span {
				font-size: 15px;
				color: #FFFFFF80;
			}
		}
	}


	@media (max-width: 600px) {
		.footer_wrapper{
			padding: 0;

			& .top_wrapper {
				justify-content: center;
				align-items: center;
				flex-direction: column;

				& .logo {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					width: 100%;

					& span {
						text-align: center;
					}
				}

				& .email, & .address, & .phone {
					align-self: flex-start;
					padding-top: 10px;
					margin-left: 20px;
				}
			}

			& .bottom_wrapper {
				flex-direction: column;

				& span {
					padding: 20px 10px;
					text-align: center;
				}
			}
		}
	}

</style>
