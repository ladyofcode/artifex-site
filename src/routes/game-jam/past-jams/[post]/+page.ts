import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const jam = await import(/* @vite-ignore */ `/src/content/game-jams/${params.post}.md`);

		return {
			content: jam.default,
			meta: jam.metadata,
		};
	}
	catch (e) {
		console.log(e);
		error(404, `Can't find ${params.post}`);
	}
}