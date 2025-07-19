// Load all lesson JSON files and returns them sorted by their numeric `id`.
export async function getAllLessons() {
	const data = import.meta.glob('/static/lessons/*.json');
	const imports = [];

	for (const path in data) {
		// Each `data[path]()` returns a promise that resolves to the JSON content.
		const promise = data[path]().then((mod) => {
			// Get the slug from the file path by trimming `/static` and `.json`.
			const slug = path.replace('/static', '').replace(/\.json$/, '');

			// Return a lesson object with the required fields.
			return {
				slug,
				id: Number(mod.id),
				title: mod.title,
				description: mod.description,
			};
		});

		// Push the promise into the array
		imports.push(promise);
	}

	// Wait for all lessons to finish loading
	const allLessonsData = await Promise.all(imports);

	// Sort the lessons by numeric ID in ascending order
	return allLessonsData.sort((a, b) => a.id - b.id);
}
