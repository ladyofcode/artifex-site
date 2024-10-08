<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { SplitText } from 'gsap/dist/SplitText';

	gsap.registerPlugin(ScrollTrigger, SplitText);

	import AlternatingContent from '$lib/components/homepage/AlternatingContent.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import GridGallery from '$lib/components/homepage/GridGallery.svelte';
	import SingleImage from '$lib/components/homepage/SingleImage.svelte';
	import Header from '$lib/components/homepage/Header.svelte';
	import PieceByPieceGallery from '$lib/components/homepage/piece_by_piece_gallery/PieceByPieceGallery.svelte';

	const image_pbp1 = { src: 'images/piece_by_piece/pbp1.png', width: 842, height: 595 };
	const image_pbp2 = 'images/piece_by_piece/pbp2.png';
	const image_pbp3 = 'images/piece_by_piece/pbp3.png';
	const image_pbp4 = 'images/piece_by_piece/pbp4.png';
	const image_pbp5 = 'images/piece_by_piece/pbp5.png';

	const image_gamejam2023 = {
		src: 'images/gamejam_2023.jpg',
		height: 1080,
		width: 1667
	};

	const image_pax = {
		src: 'images/pax_2023.jpg',
		height: 1080,
		width: 1775
	};

	const image_photowalk = {
		src: 'images/floriade_2023.jpg',
		height: 1080,
		width: 1440
	};

	const images_pbp_slider = [
		{
			src: image_pbp2,
			height: 500,
			width: 630
		},
		{
			src: image_pbp3,
			height: 1200,
			width: 1920
		},
		{
			src: image_pbp4,
			height: 1200,
			width: 1920
		},
		{
			src: image_pbp5,
			height: 1200,
			width: 1920
		}
	];

	const images_trips = [
		{
			src: 'images/barbie.jpg',
			height: 768,
			width: 1211
		},
		{
			src: 'images/pax_inside2023.jpg',
			height: 1080,
			width: 1440
		},
		{
			src: 'images/games_exhibition.jpg',
			height: 1233,
			width: 1440
		},
		{
			src: 'images/lightpainting.jpg',
			height: 576,
			width: 952
		},
		{
			src: 'images/core_aeons.jpg',
			height: 1080,
			width: 1600
		},
		{
			src: 'images/food_photography.jpg',
			height: 720,
			width: 960
		},
		{
			src: 'images/lca.jpg',
			height: 1080,
			width: 1080
		},
		{
			src: 'images/mel_aquarium.jpg',
			height: 1080,
			width: 1440
		},
		{
			src: 'images/sophie_sachi.jpg',
			height: 557,
			width: 718
		}
	];

	const aboutContent = [
		`
				<h3>Interests</h3>
				<p>Code, design, 3D, video, photography, digital art</p>
			`,
		`
				<h3>Learning</h3>
				<p>Workshops, mentoring, trips, experiments</p>
			`,
		`
				<h3>Projects</h3>
				<p>Personal, team, and freelance project support</p>
			`
	];

	let CSSAGameJam;
	let pbp;
	
	onMount(() => {
		const ctx = gsap.context((self) => {

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: CSSAGameJam,
					start: "top bottom",
					toggleActions: 'play none none reverse',
				},
			})

			tweenSection(tl, self)

		}, CSSAGameJam);

		const ctx2 = gsap.context((self) => {


			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: pbp,
					start: "center bottom",
					toggleActions: 'play none none reverse',
				},
			})

			tweenSection(tl, self)

		}, pbp)

		function tweenSection(tl, self){
			const image = self.selector("img");
			const title = self.selector("h3");
			const paragraph = self.selector("p");
			const button = self.selector(".button");
			const split = new SplitText(paragraph)

			tl.from(image, {
				opacity: 0,
				duration: 1
			})
			.from(title, {
				yPercent: 100,
				skewY: -10,
				opacity: 0
			})
			.from(split.lines, {
				opacity: 0,
				skewY: -10,
				y: 40,
				stagger: {
					amount: 0.1
				}
			}, "<")
			.from(button, {
				opacity: 0,
			})
		}

		return () => {ctx.revert(); ctx2.revert}
	})

	
</script>

<Header />

<section>
	<div id="about" class="container">
		<SectionHeading subheading="Community of creators" id="about" />
		<AlternatingContent content={aboutContent} />
	</div>
</section>
<section>
	<div id="events" class="container">
		<SectionHeading subheading="Game jams" id="game-jams" />

		<div class="two-column" bind:this={CSSAGameJam}>
			<SingleImage image={image_gamejam2023} galleryId="gamejam" />
			<div>
				<h3>Artifex X CSSA annual game jam</h3>
				<p>
					Artifex teams up with the ANU Computer Science Students Association for a weekend of
					learning, collaboration, and creativity at our game jam. Come create unique and innovative
					games. No experience is necessary - just bring your passion for gaming and let's jam!
				</p>

				<a class="button" href="https://artifexanu.com/cssa-afx-game-jam">Join in</a>
			</div>
		</div>
		
		<div bind:this="{pbp}">
			<h3>Piece by Piece</h3>
			<p>
				Piece by Piece is a game participants of the X Event Name Game Jam decided to continue to
				completion.
			</p>
			<p>
				Parry is a young, not exactly pleasant girl consumed by grief, who finds herself lost in a
				bizarre chess world. In order to escape, she must battle guardians who block her path
				through a series of board game battles. After being defeated, each guardian takes it upon
				themselves to accompany her on her journey, undeterred by her surly sarcastic nature. Parry
				slowly learns to open up and even befriend her new weirdo companions, however a dark truth
				Parry is hiding from is looking to find her, and she must learn to confront this truth
				before it traps her here forever.
			</p>
			<a class="button" href="https://artifexanu.itch.io/piece-by-piece">Play game</a>
		</div>
	</div>

	<PieceByPieceGallery />
</section>
<section>
	<div id="project" class="container">
		<SectionHeading id="touching-grass" subheading="Touching grass" />
		<div class="two-column">
			<SingleImage image={image_pax} galleryId="pax" />
			<div>
				<h3>PAX Aus (Annual)</h3>
				<p>
					Artifex organises an annual trip to PAX. All are welcome - plenty of non-members join us
				</p>
				<a class="button" href="https://artifexanu.com/join">Join in</a>
			</div>
		</div>

		<div class="two-column reverse">
			<SingleImage image={image_photowalk} galleryId="photowalk" />
			<div>
				<h3>Photowalks and trips</h3>
				<p>
					Literal grass and plants. Yay. <a href="https://floriadeaustralia.com/">Floriade</a> etc.
				</p>
			</div>
		</div>

		<div>
			<h3>Other trips and events</h3>

			<GridGallery images={images_trips} galleryId="pbp_group2" />
		</div>
	</div>
</section>
<section>
	<div id="contact" class="container">
		<SectionHeading id="contact" subheading="Drop us a line" />
		<div class="content">
			<div>
				<p>
					You can message us <a href="https://artifexanu.com/community">via Discord</a> or mail team
					(at) artifexanu dot com
				</p>
			</div>
			<div>
				<h3>See upcoming events on</h3>
				<ul>
					<li>
						<a href="https://www.instagram.com/artifexanu/"
							><svg
								width="32"
								height="32"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 122.88 122.88"
							>
								<path
									fill="#f5f5f5"
									d="M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z"
								/>
							</svg>Instagram</a
						>
					</li>
					<li>
						<a href="https://www.facebook.com/artifexanu/"
							><svg
								width="32"
								height="32"
								xmlns="http://www.w3.org/2000/svg"
								shape-rendering="geometricPrecision"
								text-rendering="geometricPrecision"
								image-rendering="optimizeQuality"
								fill-rule="evenodd"
								clip-rule="evenodd"
								viewBox="0 0 640 640"
							>
								<path
									fill="#f5f5f5"
									d="M579.999-.012H60C27-.012-.013 27-.013 60.001V580C-.013 613 27 640.012 60 640.012h519.999c33 0 60.013-27.012 60.013-60.012V60c0-33-27.013-60.012-60.013-60.012zM363.819 173.79h73.147V86.068h-73.147c-56.328 0-102.285 45.945-102.285 102.344v43.843h-58.489V320h58.477v233.932h87.734V320h73.075l14.634-87.745h-87.71v-43.843c0-7.938 6.698-14.634 14.564-14.634v.011z"
								/>
							</svg>Facebook</a
						>
					</li>
					<li>
						<a href="https://artifexanu.com/join"
							><svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path
									fill="#f5f5f5"
									d="M105 0h302c57.928.155 104.845 47.072 105 104.996V407c-.155 57.926-47.072 104.844-104.996 104.998L105 512C47.074 511.844.156 464.926.002 407.003L0 105C.156 47.072 47.074.155 104.997 0H105zm263.896 153.382a269.459 269.459 0 00-67.117-20.638 186.784 186.784 0 00-8.571 17.476 250.18 250.18 0 00-37.246-2.8c-12.447 0-24.956.945-37.25 2.776-2.512-5.927-5.428-11.804-8.592-17.455a271.746 271.746 0 00-67.133 20.681c-42.48 62.842-53.992 124.112-48.236 184.513a270.634 270.634 0 0082.308 41.312c6.637-8.959 12.583-18.497 17.63-28.422a174.021 174.021 0 01-27.772-13.253c2.329-1.689 4.606-3.428 6.805-5.118 25.727 12.083 53.837 18.385 82.277 18.385 28.442 0 56.552-6.302 82.279-18.386 2.226 1.816 4.503 3.556 6.805 5.117a175.079 175.079 0 01-27.822 13.289 197.895 197.895 0 0017.63 28.4 269.527 269.527 0 0082.363-41.306l-.007.007c6.754-70.044-11.537-130.753-48.351-184.578zM201.969 300.789c-16.04 0-29.293-14.556-29.293-32.464s12.791-32.593 29.241-32.593 29.599 14.685 29.318 32.593c-.282 17.908-12.919 32.464-29.266 32.464zm108.061 0c-16.066 0-29.266-14.556-29.266-32.464s12.791-32.593 29.266-32.593c16.475 0 29.523 14.685 29.241 32.593-.281 17.908-12.893 32.464-29.241 32.464z"
								/>
							</svg>Discord</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.button {
		background-color: var(--clr-afx-pink);
		padding: var(--space-xs) var(--space-md);
		color: var(--clr-text);
		border: none;
		border-radius: 4px;
	}
	.button:hover {
		text-decoration: dotted;
		background-color: var(--clr-afx-purple);
		transition: background-color 200ms ease-in-out;
	}

	h3 {
		color: var(--clr-afx-blue);
	}

	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: var(--clr-bg);
		padding: var(--space-xxxxl) var(--space-xl);
	}

	.two-column {
		margin-bottom: var(--space-lg);
		display: flex;
		flex-direction: column;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	ul li {
		margin-bottom: 0.8rem;
	}

	#contact ul a {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	#contact a svg {
		margin-right: 0.8rem;
	}

	@media (min-width: 800px) {
		.two-column {
			flex-direction: row;
			gap: 2rem;
		}

		.reverse {
			flex-direction: row-reverse;
		}

		.two-column div {
			width: 80%;
		}

		.two-column :global(.pswp-gallery) {
			margin-top: 0;
			max-width: 50%;
		}
	}
</style>
