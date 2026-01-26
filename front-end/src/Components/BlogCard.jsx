import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, snippet, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden
        shadow-md
        transition-all duration-300 ease-out
        transform hover:-translate-y-2 hover:shadow-xl">
      
      <img
        src={image} alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 mb-4">
          {snippet}
        </p>

        <Link
          to={`/blog/${id}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
