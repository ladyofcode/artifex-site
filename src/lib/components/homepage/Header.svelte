<script>
	import gsap from 'gsap';
	import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin';
	import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';

	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

		let anim = gsap.timeline({ defaults: { duration: 0.1 } });

		anim
			.fromTo(
				'#pathOne',
				{
					clipPath: 'polygon(8.72% 104.67%, -17.44% 98.68%, -10.88% 95.34%, 14.03% 104.01%)'
				},
				{
					clipPath: 'polygon(8.72% 104.67%, -17.44% 98.68%, 92.53% -6.67%, 113.70% 2.00%)',
					ease: 'power1.out'
				}
			)
			.fromTo('#circleOne', { opacity: 0 }, { opacity: 1 }, '>+0.2')
			.fromTo(
				'#pathTwo',
				{
					clipPath: 'polygon(-11.45% 1.44%, -16% -3.78%, 8.98% -8.22%, 14.30% -1.88%)'
				},
				{
					clipPath: 'polygon(93.71% 106.23%, -16% -3.78%, 8.98% -8.22%, 109.38% 99.03%)',
					ease: 'power1.out'
				}
			)
			.fromTo('#circleTwo', { opacity: 0 }, { opacity: 1 }, '>+0.2')
			.fromTo(
				'#pathThree',
				{
					clipPath: 'polygon(113.58% 18.15%, 105.57% 46.55%, 95.38% -20.8%, 109.39% -20.51%)'
				},
				{
					clipPath: 'polygon(118.17% 55.9%, -0.71% 128.34%, -21.61% 60.99%, 104.8% -49.87%)',
					ease: 'power1.out'
				}
			)
			.fromTo('#circleThree', { opacity: 0 }, { opacity: 1 }, '>+0.2')
			.fromTo(
				'#pathFour',
				{
					clipPath: 'polygon(21.85% 105.54%, 17.74% 109.15%, -19.56% 98.24%, -16.1% 93.44%)'
				},
				{
					clipPath: 'polygon(109.96% 6.24%, 17.74% 109.15%, -19.56% 98.24%, 84.31% -6.99%)',
					ease: 'power1.out'
				}
			)
			.fromTo('#circleFour', { opacity: 0 }, { opacity: 1 }, '>+0.2')
			.fromTo(
				'#pathFive',
				{
					clipPath: 'polygon(15.06% -2.22%, -11.6% 3.94%, -12.66% 2.42%, 15.29% -4.17%)'
				},
				{
					clipPath: 'polygon(116.87% 99.24%, 88.49% 107.27%, -12.66% 2.42%, 15.29% -4.17%)',
					ease: 'power1.out'
				}
			)
			.to('#title', {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power1.out'
			});
	});
</script>

<header>
	<div class="container">
		<svg
			version="1.1"
			id="logo"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 753.5 750"
			enable-background="new 0 0 753.5 750"
			xml:space="preserve"
		>
			<circle id="background" fill="#26273A" cx="375.5" cy="375.1" r="375" />
			<g id="pathOne-clip_00000061455941068819964370000002661336664669056386_">
				<defs>
					<path
						id="pathOne-mask"
						d="M161.6,536.4c-1.3,0-2.6-0.3-3.9-0.9c-4.2-2.1-5.8-7.3-3.7-11.4l187.3-364.8c2.1-4.2,7.3-5.8,11.4-3.7
			c4.2,2.1,5.8,7.3,3.7,11.4L169.2,531.8C167.7,534.7,164.7,536.4,161.6,536.4z"
					/>
				</defs>
				<clipPath id="pathOne-mask_00000101785624034148695640000008411255432318853003_">
					<use xlink:href="#pathOne_x002D_mask" overflow="visible" />
				</clipPath>

				<linearGradient
					id="pathOne_00000078028953897229061770000013798840706280448175_"
					gradientUnits="userSpaceOnUse"
					x1="-68.6957"
					y1="469.8121"
					x2="-68.6957"
					y2="894.7921"
					gradientTransform="matrix(1 0 0 -1 324 1046)"
				>
					<stop offset="0" style="stop-color:#B23F82" />
					<stop offset="0.49" style="stop-color:#7C4BC4" />
					<stop offset="1" style="stop-color:#0088D4" />
				</linearGradient>

				<path
					id="pathOne"
					clip-path="url(#pathOne-mask_00000101785624034148695640000008411255432318853003_)"
					fill="url(#pathOne_00000078028953897229061770000013798840706280448175_)"
					d="
		M161.6,536.4c-1.3,0-2.6-0.3-3.9-0.9c-4.2-2.1-5.8-7.3-3.7-11.4l187.3-364.8c2.1-4.2,7.3-5.8,11.4-3.7c4.2,2.1,5.8,7.3,3.7,11.4
		L169.2,531.8C167.7,534.7,164.7,536.4,161.6,536.4z"
				/>
			</g>
			<g id="pathTwo-Clip">
				<defs>
					<path
						id="pathTwo-mask"
						d="M558.3,482.8c-3.1,0-6.1-1.7-7.6-4.6l-159.7-311c-2.1-4.2-0.5-9.3,3.7-11.4c4.2-2.1,9.3-0.5,11.4,3.7
			l159.7,311c2.1,4.2,0.5,9.3-3.7,11.4C561,482.5,559.6,482.8,558.3,482.8z"
					/>
				</defs>
				<clipPath id="pathTwo-mask_00000041264058202668989720000007374871059094938031_">
					<use xlink:href="#pathTwo_x002D_mask" overflow="visible" />
				</clipPath>

				<linearGradient
					id="pathTwo_00000162343463539574975660000017348111206675072896_"
					gradientUnits="userSpaceOnUse"
					x1="154.4693"
					y1="469.8121"
					x2="154.4693"
					y2="894.7921"
					gradientTransform="matrix(1 0 0 -1 324 1046)"
				>
					<stop offset="0" style="stop-color:#B23F82" />
					<stop offset="0.49" style="stop-color:#7C4BC4" />
					<stop offset="1" style="stop-color:#0088D4" />
				</linearGradient>

				<path
					id="pathTwo"
					clip-path="url(#pathTwo-mask_00000041264058202668989720000007374871059094938031_)"
					fill="url(#pathTwo_00000162343463539574975660000017348111206675072896_)"
					d="
		M558.3,482.8c-3.1,0-6.1-1.7-7.6-4.6l-159.7-311c-2.1-4.2-0.5-9.3,3.7-11.4c4.2-2.1,9.3-0.5,11.4,3.7l159.7,311
		c2.1,4.2,0.5,9.3-3.7,11.4C561,482.5,559.6,482.8,558.3,482.8z"
				/>
			</g>
			<g id="pathFour-clip">
				<defs>
					<path
						id="pathFour-mask"
						d="M242,574.4c-1.3,0-2.6-0.3-3.9-0.9c-4.2-2.1-5.8-7.3-3.7-11.4l107.2-208.6c2.1-4.2,7.3-5.8,11.4-3.7
			s5.8,7.3,3.7,11.4L249.5,569.8C248,572.7,245.1,574.4,242,574.4L242,574.4z"
					/>
				</defs>
				<clipPath id="pathFour-mask_00000065765027738437958150000003933672769012898961_">
					<use xlink:href="#pathFour_x002D_mask" overflow="visible" />
				</clipPath>

				<linearGradient
					id="pathFour_00000130646558676060429580000012734810169079695264_"
					gradientUnits="userSpaceOnUse"
					x1="-28.4257"
					y1="469.8121"
					x2="-28.4257"
					y2="894.7921"
					gradientTransform="matrix(1 0 0 -1 324 1046)"
				>
					<stop offset="0" style="stop-color:#B23F82" />
					<stop offset="0.49" style="stop-color:#7C4BC4" />
					<stop offset="1" style="stop-color:#0088D4" />
				</linearGradient>

				<path
					id="pathFour"
					clip-path="url(#pathFour-mask_00000065765027738437958150000003933672769012898961_)"
					fill="url(#pathFour_00000130646558676060429580000012734810169079695264_)"
					d="
		M242,574.4c-1.3,0-2.6-0.3-3.9-0.9c-4.2-2.1-5.8-7.3-3.7-11.4l107.2-208.6c2.1-4.2,7.3-5.8,11.4-3.7s5.8,7.3,3.7,11.4L249.5,569.8
		C248,572.7,245.1,574.4,242,574.4L242,574.4z"
				/>
			</g>
			<g id="pathFive-clip">
				<defs>
					<path
						id="pathFive-mask"
						d="M529.3,619.7c-3.1,0-6.1-1.7-7.6-4.6l-130.5-254c-2.1-4.2-0.5-9.3,3.7-11.4c4.2-2.1,9.3-0.5,11.4,3.7
			l130.5,254c2.1,4.2,0.5,9.3-3.7,11.4C531.9,619.4,530.6,619.7,529.3,619.7L529.3,619.7z"
					/>
				</defs>
				<clipPath id="pathFive-mask_00000158017786197002725310000014495078821362341506_">
					<use xlink:href="#pathFive_x002D_mask" overflow="visible" />
				</clipPath>

				<linearGradient
					id="pathFive_00000077314180580095721820000015564499040347694013_"
					gradientUnits="userSpaceOnUse"
					x1="139.9993"
					y1="469.8121"
					x2="139.9993"
					y2="894.7921"
					gradientTransform="matrix(1 0 0 -1 324 1046)"
				>
					<stop offset="0" style="stop-color:#B23F82" />
					<stop offset="0.49" style="stop-color:#7C4BC4" />
					<stop offset="1" style="stop-color:#0088D4" />
				</linearGradient>

				<path
					id="pathFive"
					clip-path="url(#pathFive-mask_00000158017786197002725310000014495078821362341506_)"
					fill="url(#pathFive_00000077314180580095721820000015564499040347694013_)"
					d="
		M529.3,619.7c-3.1,0-6.1-1.7-7.6-4.6l-130.5-254c-2.1-4.2-0.5-9.3,3.7-11.4c4.2-2.1,9.3-0.5,11.4,3.7l130.5,254
		c2.1,4.2,0.5,9.3-3.7,11.4C531.9,619.4,530.6,619.7,529.3,619.7L529.3,619.7z"
				/>
			</g>
			<path
				id="overlap"
				fill="#26273A"
				d="M450.8,439.1c-6.1,0.3-13.1,0.8-19.2,1.5l21.7,42.1c4-0.2,8.4-0.3,12.5-0.3c2.3,0,5,0,7.3,0.1
	L450.8,439.1z"
			/>
			<g id="pathThree-clip">
				<defs>
					<path
						id="pathThree-mask"
						d="M242.5,573.4c-2,0-4.1-0.7-5.7-2.2c-3.5-3.1-3.8-8.5-0.6-12c25.4-28.2,68.4-66.5,128.7-88.9
			c61.5-22.8,127.3-24.2,195.8-4.2c4.5,1.3,7.1,6,5.8,10.5s-6,7.1-10.5,5.8c-32.3-9.5-62.4-13.5-90.1-13.5
			c-106.7,0-179.3,59.9-217,101.6C247.1,572.4,244.8,573.4,242.5,573.4L242.5,573.4z"
					/>
				</defs>
				<clipPath id="pathThree-mask_00000112615602870314063880000018248196142983541891_">
					<use xlink:href="#pathThree_x002D_mask" overflow="visible" />
				</clipPath>

				<linearGradient
					id="pathThree_00000040572498038709599380000017155922340712867715_"
					gradientUnits="userSpaceOnUse"
					x1="76.4028"
					y1="469.8121"
					x2="76.4028"
					y2="894.7921"
					gradientTransform="matrix(1 0 0 -1 324 1046)"
				>
					<stop offset="0" style="stop-color:#B23F82" />
					<stop offset="0.49" style="stop-color:#7C4BC4" />
					<stop offset="1" style="stop-color:#0088D4" />
				</linearGradient>

				<path
					id="pathThree"
					clip-path="url(#pathThree-mask_00000112615602870314063880000018248196142983541891_)"
					fill="url(#pathThree_00000040572498038709599380000017155922340712867715_)"
					d="
		M242.5,573.4c-2,0-4.1-0.7-5.7-2.2c-3.5-3.1-3.8-8.5-0.6-12c25.4-28.2,68.4-66.5,128.7-88.9c61.5-22.8,127.3-24.2,195.8-4.2
		c4.5,1.3,7.1,6,5.8,10.5s-6,7.1-10.5,5.8c-32.3-9.5-62.4-13.5-90.1-13.5c-106.7,0-179.3,59.9-217,101.6
		C247.1,572.4,244.8,573.4,242.5,573.4L242.5,573.4z"
				/>
			</g>
			<linearGradient
				id="circleOne_00000123411863891654374490000012302679023975597730_"
				gradientUnits="userSpaceOnUse"
				x1="49.7443"
				y1="469.8121"
				x2="49.7443"
				y2="894.7921"
				gradientTransform="matrix(1 0 0 -1 324 1046)"
			>
				<stop offset="0" style="stop-color:#B23F82" />
				<stop offset="0.49" style="stop-color:#7C4BC4" />
				<stop offset="1" style="stop-color:#0088D4" />
			</linearGradient>
			<circle
				id="circleOne"
				fill="url(#circleOne_00000123411863891654374490000012302679023975597730_)"
				cx="373.7"
				cy="134.7"
				r="19.8"
			/>
			<linearGradient
				id="circleTwo_00000134948789905575311750000006120448428480131513_"
				gradientUnits="userSpaceOnUse"
				x1="257.7443"
				y1="475.8121"
				x2="257.7443"
				y2="900.7921"
				gradientTransform="matrix(1 0 0 -1 324 1046)"
			>
				<stop offset="0" style="stop-color:#B23F82" />
				<stop offset="0.49" style="stop-color:#7C4BC4" />
				<stop offset="1" style="stop-color:#0088D4" />
			</linearGradient>
			<circle
				id="circleTwo"
				fill="url(#circleTwo_00000134948789905575311750000006120448428480131513_)"
				cx="581.7"
				cy="502.3"
				r="19.8"
			/>
			<linearGradient
				id="circleThree_00000165935322758287499660000012393858398808335247_"
				gradientUnits="userSpaceOnUse"
				x1="49.7443"
				y1="469.8121"
				x2="49.7443"
				y2="894.7921"
				gradientTransform="matrix(1 0 0 -1 324 1046)"
			>
				<stop offset="0" style="stop-color:#B23F82" />
				<stop offset="0.49" style="stop-color:#7C4BC4" />
				<stop offset="1" style="stop-color:#0088D4" />
			</linearGradient>
			<circle
				id="circleFour"
				fill="url(#circleThree_00000165935322758287499660000012393858398808335247_)"
				cx="373.7"
				cy="328.7"
				r="19.8"
			/>
			<linearGradient
				id="circleFour_00000085945224057287040770000004076329368592185273_"
				gradientUnits="userSpaceOnUse"
				x1="-101.8357"
				y1="472.8121"
				x2="-101.8357"
				y2="897.7921"
				gradientTransform="matrix(1 0 0 -1 324 1046)"
			>
				<stop offset="0" style="stop-color:#B23F82" />
				<stop offset="0.49" style="stop-color:#7C4BC4" />
				<stop offset="1" style="stop-color:#0088D4" />
			</linearGradient>
			<circle
				id="circleThree"
				fill="url(#circleFour_00000085945224057287040770000004076329368592185273_)"
				cx="222.2"
				cy="596.9"
				r="19.8"
			/>
		</svg>
		<h1 id="title">Artifex</h1>
	</div>
</header>

<style>
	header {
		background-color: var(--clr-bg);
		padding: var(--space-lg);
		height: 100vh;
		max-height: 1000px;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

    svg {
        margin: 0 auto;
    }

	h1 {
		text-align: center;
		font-size: 4rem;
		margin: 0;
		padding: 0;
		font-weight: 100;
		opacity: 0;
		transform: translateY(20px);
	}

	#pathOne {
		clip-path: polygon(8.72% 104.67%, -17.44% 98.68%, -10.88% 95.34%, 14.03% 104.01%);
	}

	#pathTwo {
		clip-path: polygon(-11.45% 1.44%, -16% -3.78%, 8.98% -8.22%, 14.3% -1.88%);
	}

	#pathThree {
		clip-path: polygon(113.58% 18.15%, 105.57% 46.55%, 95.38% -20.8%, 109.39% -20.51%);
	}

	#pathFour {
		clip-path: polygon(21.85% 105.54%, 17.74% 109.15%, -19.56% 98.24%, -16.1% 93.44%);
	}

	#pathFive {
		clip-path: polygon(15.06% -2.22%, -11.6% 3.94%, -12.66% 2.42%, 15.29% -4.17%);
	}

	#pathOne,
	#pathTwo,
	#pathThree,
	#pathFour,
	#pathFive {
		transition: clip-path 0.2s ease-out;
	}

	circle:not(:first-of-type) {
		opacity: 0;
	}

    @media (min-width: 800px) {
        svg {
            max-width: 400px;
        }

        h1 {
            font-size: 6rem;
        }
    }
</style>
