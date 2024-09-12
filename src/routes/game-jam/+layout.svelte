<script>
    import '../../game-jam.css';

	import Navbar from "./Navbar.svelte";

    export let data;

		console.log(data);

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
			href: '/game-jam/upcoming'
		},
		{
			text: 'Past Jams',
			href: '/game-jam/past-jams',
			subItems: pastJame
		},
		{
			text: 'Rules',
			href: '/rules',
			subItems: [
				{
					text: 'Faq',
					href: '/faq'
				},

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
        height: 100vh;
        width: 100vw;
    }
</style>