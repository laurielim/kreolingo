import { getAllLessons } from '$lib/data/lessons';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		lessons: getAllLessons()
	};
}
