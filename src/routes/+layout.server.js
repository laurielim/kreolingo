/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	const data = import.meta.glob('/static/lessons/*.json')
	/**
	 * @type {{ slug: string; id: number; title: string; description: string; }[]}
	 */
	const lessons = [];
	for (const path in data) {
		try {
			const mod = await data[path]();
			const slug = path.replace('/static', '').replace(/\.json$/, '');
			lessons.push({
				slug,
				id: mod.id,
				title: mod.title,
				description: mod.description,
			})
		} catch (err) {
			console.log(err)
		}
	}
	return {
		lessons: lessons.sort((a, b) => a.id - b.id)
	};
}
