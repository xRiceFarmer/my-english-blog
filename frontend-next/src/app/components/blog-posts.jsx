'use client'
import React, { useState } from 'react';
import BlogCard from "./blog-card";

const BlogPosts = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(posts.flatMap(post => post.category))];

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category.includes(selectedCategory));

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        {categories.map(category => (
          <button
            key={category}
            className={`btn btn-sm ${selectedCategory === category ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;