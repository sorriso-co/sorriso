"use client";
import React, { useState } from 'react';
import BlogCard from './BlogCard'; 

interface Blog {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}

interface BlogGridProps {
  blogs: Blog[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 24; // Number of blogs per page

  // Pagination Logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Grid of Blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {currentBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            slug={blog.slug}
            imageUrl={blog.imageUrl}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            author={blog.author}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-sm rounded ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-teal-600 text-white hover:bg-teal-500'
            }`}
          >
            Previous
          </button>
          <p className="text-gray-700 text-sm md:text-base">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-sm rounded ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-teal-600 text-white hover:bg-teal-500'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
