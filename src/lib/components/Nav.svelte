<nav>
	<input class="checkbox" type="checkbox" name="menu-button" id="menu-button" />
	<label class="hamburger-lines" for="menu-button">
		<span class="line line1"></span>
		<span class="line line2"></span>
		<span class="line line3"></span>
	</label>
	<ul class="menu">
		<li class="menu-items">
			<a href="#about-section" onClick="closeNav()">About</a>
		</li>
		<li>
			<a href="#events-section" onClick="closeNav()">Events</a>
		</li>
		<li>
			<a href="#project-section" onClick="closeNav()">Project</a>
		</li>
		<li>
			<a href="#join-section" onClick="closeNav()">Join</a>
		</li>
		<li>
			<a href="#contact-section" onClick="closeNav()">Contact</a>
		</li>
	</ul>
</nav>

<style>
	/*
* Menu
*/

	nav {
		background-color: #ffffff;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		background-color: var(--bg-color);
		z-index: 10;
		padding: 2.4rem 0;
		filter: drop-shadow(0px 10px 16px #0a0417c7);
	}

	.menu {
		margin-top: 1.6rem;
		width: 100%;
		height: 100vh;
		position: sticky;
		overflow: hidden;
		max-height: 0;
		transition: max-height 0.5s ease-out;
		background-color: var(--bg-color);
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.menu > li > a {
		display: block;
		padding: 1.6rem 2.4rem;
		text-decoration: none;
	}

	nav .checkbox {
		display: none;
	}

	/*Menu icon styling*/

	nav .hamburger-lines {
		cursor: pointer;
		float: right;
		display: block;
		height: 26px;
		width: 32px;
		position: relative;
		right: 20px;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	nav .hamburger-lines .line {
		display: block;
		height: 4px;
		width: 100%;
		border-radius: 10px;
		background: #e3e9ec;
	}

	nav .hamburger-lines .line1 {
		transform-origin: 0% 0%;
		transition: transform 0.4s ease-in-out;
	}

	nav .hamburger-lines .line2 {
		transition: transform 0.2s ease-in-out;
	}

	nav .hamburger-lines .line3 {
		transform-origin: 0% 100%;
		transition: transform 0.4s ease-in-out;
	}

	nav input[type='checkbox']:checked ~ .menu {
		max-height: 100%;
	}

	nav input[type='checkbox']:checked ~ .menu-items {
		transform: translateX(0);
	}

	nav input[type='checkbox']:checked ~ .hamburger-lines .line1 {
		transform: rotate(45deg);
	}

	nav input[type='checkbox']:checked ~ .hamburger-lines .line2 {
		transform: scaleY(0);
	}

	nav input[type='checkbox']:checked ~ .hamburger-lines .line3 {
		transform: rotate(-45deg);
	}

	nav input[type='checkbox']:checked ~ .logo {
		display: none;
	}
</style>
