export function getAllLessons() {
	const data = import.meta.glob('/static/lessons/*.json')
	const allLessonsData: { slug: string; id: number; title: string; description: string; }[] = [];
	for (const path in data) {
		data[path]().then((mod) => {
			const slug = path.replace('/static', '').replace(/\.json$/, '');

			allLessonsData.push({
				slug,
				id: mod.id,
				title: mod.title,
				description: mod.description,
			})
		})
	}
	return allLessonsData.sort((a, b) => a.id - b.id)
}