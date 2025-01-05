import React from 'react';
import BlogGrid from '@/components/Blog/BlogsGrid';
import BlogHero from '@/components/Blog/Hero';
import { fetchBlogs } from '@/utils/fetchBlogs';

const BlogPage = async () => {
  const blogs = await fetchBlogs();

  return (
    <main className="bg-white text-teal-900 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:py-16 sm:px-6 flex-grow">
        {/* Hero Section */}
        <BlogHero />

        {/* Blog Grid or No Blogs Message */}
        <section className="border-t border-gray-300 pt-10 flex flex-col justify-center items-center">
          {blogs.length > 0 ? (
            <BlogGrid blogs={blogs} />
          ) : (
            <div className="text-center px-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-teal-700">
                No Blogs Available
              </h2>
              <p className="text-gray-600 mt-4 text-base sm:text-lg">
                We currently don’t have any blogs to display. Please check back later for updates!
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default BlogPage;
