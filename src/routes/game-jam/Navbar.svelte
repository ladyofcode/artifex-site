<script>
	import { text } from '@sveltejs/kit';
	import gsap from 'gsap';
	import { onDestroy, onMount } from 'svelte';

	export let navItems;

	function toSlug(text) {
		return text.replace(' ', '-');
	}

	let currentLocation;
	$: isCurrentPage = (href) => {
		if (!currentLocation) return '';
		if (!href) return '';

		const splitDirectoryCurrent = currentLocation.split('/');
		const lastDirectoryCurrent = splitDirectoryCurrent[splitDirectoryCurrent.length - 1];

		const splitDirectoryHRef = href.split('/');
		const lastDirectoryHRef = splitDirectoryHRef[splitDirectoryHRef.length - 1];

		return lastDirectoryCurrent.includes(lastDirectoryHRef) ? 'selected' : '';
	};

	let observer;

	onMount(() => {
		currentLocation = window.location.href;
		const body = document.querySelector('body');
		observer = new MutationObserver((mutations) => {
			if (currentLocation !== document.location.href) {
				currentLocation = document.location.href;
			}
		});
		observer.observe(body, { childList: true, subtree: true });

	});

	onDestroy(() => {
		if(observer){
			observer.disconnect()
		}
	})
    
    
    function toggleShow(event){
        const target = event.target;
        const toShow = target.nextElementSibling;
        const computedStyleMap = toShow.computedStyleMap();
        const opacity = computedStyleMap.get("opacity").value;
        const isHidden = opacity === 0;

        gsap.killTweensOf(toShow)

        const timeline = gsap.timeline();
        
        if(isHidden){
            timeline.to(toShow, 
            {
                opacity: 1,
                height: "auto"
            })
        }
        else{
            timeline.to(toShow, {
                opacity: 0,
                height: "0px",
                overflow: "hidden"
            })
        }
    }

</script>

<div class="navigation-container">
	<h1>Logo</h1>
	<input type="checkbox" id="menu-toggle" />
	<label for="menu-toggle" class="burger-wrapper">
		<div class="hamburger"></div>
	</label>
	<nav>
		<ul class="main-menu">
			{#each navItems as item}
				<li class="item {isCurrentPage(item.href)}" id={toSlug(item.text)}>
					<a href={item.href}>
						{item.text}
					</a>
					{#if item.subItems && item.subItems.length > 0}
                        <span on:click={toggleShow} role="button" class="menu-caret">
							<svg
								width="12"
								height="7"
								viewBox="0 0 12 7"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
                                class="no-pointer"
							>
								<path d="M1 1L6 6L11 1" class="no-pointer" stroke="white" />
							</svg>
                        </span>

						<ul class="subcontent">
							{#each item.subItems as subItem}
								<li>
									<a href={subItem.href}>
										{subItem.text}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	a {
		text-decoration: none;
		color: var(--clr-text);
	}

	.navigation-container {
		display: flex;
		padding-top: var(--space-md);
		padding-left: var(--space-md);
		padding-right: var(--space-md);
	}

	/* input for burger */
	#menu-toggle {
		display: none;
	}

	/* Burger stylings */
	.navigation-container > .burger-wrapper {
		margin-left: auto;
		cursor: pointer;
		z-index: 1;
		color: var(--clr-text);
	}

	.burger-wrapper {
		width: 50px;
		height: 50px;
	}

	.hamburger {
		position: relative;
		margin-top: var(--space-md);
        transition: background 10ms 300ms ease;

	}

	.hamburger,
	.hamburger::before,
	.hamburger::after {
		width: 100%;
		height: 2px;
		background-color: white;
	}

	.hamburger::before {
		position: absolute;
		content: '';
		top: -10px;
	}
	.hamburger::after {
		position: absolute;
		content: '';
		top: 10px;
	}

	#menu-toggle:checked + label + nav {
		left: 0;
	}

	/* Burger to X */
	#menu-toggle:checked + .burger-wrapper > .hamburger {
		background: transparent;
	}

    .hamburger::before,
    .hamburger::after{
        transition: top 300ms 350ms ease,
            transform 300ms 50ms;
    }

	#menu-toggle:checked + .burger-wrapper > .hamburger::before,
	#menu-toggle:checked + .burger-wrapper > .hamburger::after {
		top: 0;
        transition: top 300ms 50ms ease,
            transform 300ms 350ms ease;
	}

	#menu-toggle:checked + .burger-wrapper > .hamburger::before {
		transform: rotate(45deg);
	}

	#menu-toggle:checked + .burger-wrapper > .hamburger::after {
		transform: rotate(-45deg);
	}

	/* Navigation */
	nav {
		width: 100vw;
		height: 100vh;
	}

	nav {
		position: absolute;
		top: 0;
		left: -100vw;
		transition: 0.3s;
	}

	.main-menu {
		margin-left: var(--space-xxxl);
		margin-top: 104px;
		padding-left: 0;
	}

	li {
		font-size: 1.5rem;
		list-style-type: circle;
	}

	li::marker {
		color: #ffc700;
	}

	.selected {
		list-style-type: disc;
	}

	li svg {
		display: inline;
		margin-bottom: 2px;
	}

	li:not(:first-child) {
		margin-top: var(--space-sm);
	}

	/* Sub menu */
	.item .subcontent {
		opacity: 0;
        height: 0;
        overflow: hidden;
		padding-left: 0.75rem;
	}

	.subcontent li {
		font-size: 1rem;
		margin-top: var(--space-xs);
	}

    .menu-caret{
        cursor: pointer;
    }
    .no-pointer{
        pointer-events: none;
    }
	@media (min-width: 1000px) {
		.navigation-container {
			align-items: center;
			padding: var(--space-xxxl) 168px 0 168px;
		}
		.burger-wrapper {
			display: none;
		}

		nav {
			position: static;
			background-color: transparent;
			display: flex;
			height: auto;
		}

		.main-menu {
			margin-top: 0;
			margin-left: auto;
			display: flex;
			text-wrap: nowrap;
			gap: var(--space-lg);
		}

		.item {
			list-style: none;
			position: relative;
			cursor: pointer;
			font-size: 16px;
		}

        .item .subcontent{
            opacity: 0;
            height: 0;
            overflow: hidden;
            pointer-events: none;
            transition: 0.2s linear;
        }

		.item:hover .subcontent{
			opacity: 1;
            height: auto;
            overflow: auto;
            pointer-events: all;
			padding: var(--space-sm) var(--space-xl);
            transition: 0.2s linear;
		}

		.item .subcontent {
			position: absolute;
			background-color: #e07e24;
			color: black;
			left: 50%;
			top: 100%;
			transform: translateX(-50%);
			width: auto;
			text-align: center;
			padding-left: 0;
			border-radius: var(--border-radius);
			text-wrap: nowrap;
        }

		.subcontent li {
			list-style: none;
			padding-left: 0;
		}

		.subcontent a {
			color: black;
		}

		.item:not(:first-child) {
			margin-top: 0;
		}

		.item.selected > a::before {
			content: '•';
			font-size: 32px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%);
			color: #ffc700;
		}

		.menu-caret {
			pointer-events: none;
		}
	}
</style>
