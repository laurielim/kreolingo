import fs from 'fs';
import path from 'path';
const lessonsDirectory = path.join(process.cwd(), 'lessons');

export function getAllLessons() {
	const fileNames = fs.readdirSync(lessonsDirectory);
	const allLessonsData = fileNames.map((fileName: string) => {
		// Remove ".json" from file name to get id
		const slug = fileName.replace(/\.json$/, '');

		const lesson = getLessonBySlug(slug);

		return {
			slug,
			...lesson
		};
	});
	return allLessonsData;
}

export function getLessonBySlug(slug: string) {
	// Read file content
	const fileName = `${slug}.json`;
	const fullPath = path.join(lessonsDirectory, fileName);
	try {
		if (fs.existsSync(fullPath)) {
			const fileContents = fs.readFileSync(fullPath, 'utf8');
			return JSON.parse(fileContents);
		}
	} catch (err) {
		return null;
	}
}
