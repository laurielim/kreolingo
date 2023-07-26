import { getAllLessons } from '$lib/data/lessons';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    return {
        lessons: await getAllLessons(),
    };
}