/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	const data = import.meta.glob('/static/lessons/*.json')
	/**
	 * @type {{ slug: string; id: number; title: string; description: string; }[]}
	 */
	const lessons = [];
	for (const path in data) {
		data[path]().then((mod) => {
			const slug = path.replace('/static', '').replace(/\.json$/, '');

			lessons.push({
				slug,
				id: mod.id,
				title: mod.title,
				description: mod.description,
			})
		})
	}
	return {
		lessons: lessons.sort((a, b) => a.id - b.id)
	};
}
