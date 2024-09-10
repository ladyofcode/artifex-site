<script>
	import { text } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	function toSlug(text) {
		return text.replace(' ', '-');
	}

	let currentLocation;
	$: isCurrentPage = (href) => {
		if (!currentLocation) return '';
		if (!href) return '';

		return currentLocation.includes(href) ? 'selected' : '';
	};

	onMount(() => {
		currentLocation = window.location.href;
    })

</script>

<div class="navigation-container">
	<h1>Logo</h1>
	<input type="checkbox" id="menu-toggle"/>
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
						<a href="#{toSlug(item.text)}" class="menu-caret">
							<svg
								width="12"
								height="7"
								viewBox="0 0 12 7"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1 1L6 6L11 1" stroke="white" />
							</svg>
						</a>
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

	#menu-toggle:checked + .burger-wrapper > .hamburger::before,
	#menu-toggle:checked + .burger-wrapper > .hamburger::after {
		top: 0;
	}

	#menu-toggle:checked + .burger-wrapper > .hamburger::before {
		transform: rotate(45deg);
	}

	#menu-toggle:checked + .burger-wrapper > .hamburger::after {
		transform: rotate(-45deg);
	}

    /* Navigation */
	nav {
		background-color: black;
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
		display: none;
		padding-left: 0.75rem;
	}

	.item:target .subcontent {
		display: block;
	}

	.subcontent li {
		font-size: 1rem;
		margin-top: var(--space-xs);
	}
	
	@media (min-width: 1000px) {
        .navigation-container{
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

        .main-menu{
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

        .item:hover .subcontent{
            display: block;
        }

        .item .subcontent{
            position: absolute;
            background-color: #E07E24;
            color: black;
            left: 50%;
            top: 130%;
            transform: translateX(-50%);
            width: auto;
            text-align: center;
            padding-left: 0;
            padding: var(--space-sm) var(--space-xl);
            border-radius: var(--border-radius);
            text-wrap: nowrap;
        }

        .subcontent li{
            list-style: none;
            padding-left: 0
        }

        .subcontent a {
            color: black;
        }

        .item:not(:first-child){
            margin-top: 0;
        }

        .item.selected a::before{
            content: "•";
            font-size: 32px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
            color: #ffc700;
        }

        .menu-caret{
            pointer-events: none;
        }
	}
</style>
