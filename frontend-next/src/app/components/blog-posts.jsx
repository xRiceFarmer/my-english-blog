"use client";
import React, { useState } from "react";
import BlogCard from "./blog-card";

const BlogPosts = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(posts.flatMap((post) => post.category)),
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category.includes(selectedCategory));

  return (
    <div>
      <div className="flex overflow-x-auto scrollbar-hide space-x-2 py-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-sm ${
              selectedCategory === category ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        id={`${selectedCategory}-panel`}
        aria-label={`Blog posts in category ${selectedCategory}`}
      >
        {filteredPosts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
