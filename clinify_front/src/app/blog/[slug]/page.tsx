import fs from 'fs/promises';
import path from 'path';
import { Metadata } from 'next';
import Image from 'next/image';

// Function to fetch metadata
async function fetchBlogMetadata(slug: string) {
  try {
    const metadataPath = path.join(process.cwd(), `src/posts/metadata/${slug}.json`);
    const metadata = await fs.readFile(metadataPath, 'utf8');
    return JSON.parse(metadata);
  } catch (error) {
    throw new Error(`Failed to fetch metadata for slug: ${slug}`);
  }
}

// Function to fetch HTML content
async function fetchBlogHtml(slug: string) {
  try {
    const htmlPath = path.join(process.cwd(), `src/posts/html/${slug}.html`);
    return await fs.readFile(htmlPath, 'utf8');
  } catch (error) {
    throw new Error(`Failed to fetch HTML content for slug: ${slug}`);
  }
}

// Generate static params for dynamic routing
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/posts/metadata');
  const filenames = await fs.readdir(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.json', ''),
  }));
}

// Page Component
const BlogPost = async ({ params }: any) => {
  const metadata = await fetchBlogMetadata(params.slug);
  const htmlContent = await fetchBlogHtml(params.slug);

  return (
    <article className="blog-page container mx-auto py-10 px-6 text-teal-900">
      <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
      <p className="text-gray-600 text-sm mb-8">{metadata.date}</p>
      <div className="flex items-center mb-8">
        <Image
          src={metadata.author.avatarUrl}
          alt={metadata.author.name}
          className="w-12 h-12 rounded-full mr-4"
          width={48}
          height={48}
        />
        <p className="text-lg font-medium">{metadata.author.name}</p>
      </div>
      <div className="relative h-64 mb-8">
        <Image
          src={metadata.imageUrl}
          alt={metadata.title}
          layout="fill"
          className="object-cover rounded-lg"
        />
      </div>
      <div
        className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
};

export default BlogPost;

// Metadata for SEO and Open Graph
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const metadata = await fetchBlogMetadata(params.slug);

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: metadata.imageUrl,
    },
  };
}
