<footer>

	<p>© 2017 - 2023 Artifex ANU All rights reserved | Made with ♥ by <a href="https://ladyofcode.com">Tabs.</a></p>
</footer>

<style>
	footer {
		background-color: var(--clr-bg);
        padding: var(--space-xl);
	}

	p {
        margin: 0;
		text-align: center;
        position: relative;
	}

    p:before {
        content: '';
		position: absolute;
		right: 0;
		top: 100%;
		left: 0;
		height: 4px;
		margin-right: 20vw;
		margin-left: 20vw;
		margin-top: -80px;
		background: var(--clr-afx-blue);
		background: linear-gradient(
			270deg,
			var(--clr-afx-blue) 0%,
			var(--clr-afx-purple) 50%,
			var(--clr-afx-pink) 100%
		);
		/* width: 80vw; */
		border-radius: 16px;
		transition: width 0.3s ease;
    }
    
</style>
