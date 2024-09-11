<script>
    import '../../game-jam.css';

	import Navbar from "./Navbar.svelte";

    export let data;

    const filteredData = data.posts.filter(item => item.title.toLocaleLowerCase().includes("game jam"));
    const pastJame = filteredData
                        .map(item => ({text: item.title, href: "/game-jam/past-jams/" + item.slug}))

    const navItems = [
		{
			text: 'Home',
			href: '/game-jam'
		},
		{
			text: 'Upcoming',
			href: '/game-jam/game-jam-2025'
		},
		{
			text: 'Past Jams',
			href: '/game-jam/past-jams',
			subItems: pastJame
		},
		{
			text: 'Rules',
			href: '/game-jam/rules',
			subItems: [
				{
					text: 'Rule 1',
					href: '/game-jam/rules/rule-1'
				},
				{
					text: 'Rule 2',
					href: '/game-jam/rules/rule-2'
				},
				{
					text: 'Rule 3',
					href: '/game-jam/rules/rule-3'
				}
			]
		},
		{
			text: 'Contact',
			href: '/game-jam/contact'
		}
	];
</script>

<main>
    <Navbar navItems={navItems}/>
    <slot />
</main>

<style>

    main{
        background-color: black;
        height: 100vh;
        width: 100vw;
    }
</style>