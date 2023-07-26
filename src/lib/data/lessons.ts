import fs from "fs";
import path from "path";
const lessonsDirectory = path.join(process.cwd(), 'lessons')

export function getAllLessons() {
   const fileNames = fs.readdirSync(lessonsDirectory);
  const allLessonsData = fileNames.map((fileName: string) => {
    // Remove ".json" from file name to get id
    const id = fileName.replace(/\.json$/, '');

    const lesson = getLessonById(id);

    return {
      id,
      ...lesson,
    }
  })
  return allLessonsData;
}

export function getLessonById(id: string) {
   if (id == "serviceWorker.js") return { title: "", description: "" };

  // Read file content
  const fileName = `${id}.json`
  const fullPath = path.join(lessonsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  return JSON.parse(fileContents);
}