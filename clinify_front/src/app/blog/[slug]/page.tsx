import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

// Adjust the type to match Next.js PageProps with async params
interface BlogPostProps {
  params: Promise<{ slug: string }>; 
}

async function fetchBlogMetadata(slug: string) {
  // Load the blog metadata JSON file
  const metadataPath = path.join(process.cwd(), `src/posts/metadata/${slug}.json`);
  const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
  return metadata;
}

async function fetchBlogHtml(slug: string) {
  // Load the blog HTML content
  const htmlPath = path.join(process.cwd(), `src/posts/html/${slug}.html`);
  return fs.readFileSync(htmlPath, 'utf8');
}

const BlogPost: React.FC<BlogPostProps> = async ({ params }) => {
  const resolvedParams = await params; // Ensure params is resolved if it's a Promise
  const metadata = await fetchBlogMetadata(resolvedParams.slug);
  const htmlContent = await fetchBlogHtml(resolvedParams.slug);

  return (
    <article className="blog-page container mx-auto py-10 px-6 text-teal-900">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>

      {/* Blog Metadata */}
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

      {/* Blog Image */}
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
