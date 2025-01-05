import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ slug, imageUrl, title, description, date, author }) => {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="w-[320px] h-[360px] mx-auto bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="h-40 w-full relative">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-sm font-bold text-teal-900 mb-2 truncate">{title}</h2>
          <p className="text-xs text-gray-700 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center text-xs text-gray-500 mt-4">
            <p className="mr-2">{date}</p>
            <div className="flex items-center">
              <Image
                src={author.avatarUrl}
                alt={author.name}
                className="w-6 h-6 rounded-full mr-2"
                width={24}
                height={24}
              />
              <span className="font-medium text-teal-900 truncate">{author.name}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
