import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const { slug } = params;

  const response = await fetch(`/lessons/${slug}.json`);
  const lesson = await response.json();

	if (!lesson) {
		throw error(404, 'This lesson does not exist.');
	}

	return {
		...lesson,
		lock: true
	};
}
