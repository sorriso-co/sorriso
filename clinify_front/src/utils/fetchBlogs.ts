import fs from 'fs';
import path from 'path';

export async function fetchBlogs() {
  const metadataDirectory = path.join(process.cwd(), 'src/posts/metadata');
  const filenames = fs.readdirSync(metadataDirectory);

  const blogs = filenames.map((filename) => {
    try {
      const filePath = path.join(metadataDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      if (!fileContent.trim()) {
        console.warn(`Warning: ${filename} is empty and will be skipped.`);
        return null; // Skip empty files
      }
      const blogMetadata = JSON.parse(fileContent);
      return {
        id: filename.replace('.json', ''),
        ...blogMetadata,
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error parsing ${filename}: ${error.message}`);
      } else {
        console.error(`Error parsing ${filename}: ${String(error)}`);
      }
      return null; // Skip invalid files
    }
  });

  return blogs.filter((blog) => blog !== null); // Remove null entries
}
