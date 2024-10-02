'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import BlogCard from "../components/blog-card";
import { getAllPostsMeta, filterPostsByCategory } from "@/lib/mdx";

const categories = ['General', 'Beginner', 'Intermediate', 'Advanced'];

const CategoryFilter = ({ activeCategory, setActiveCategory }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    <button
      onClick={() => setActiveCategory(null)}
      className={`btn btn-sm ${activeCategory === null ? 'btn-primary' : 'btn-outline'}`}
    >
      All
    </button>
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`btn btn-sm ${activeCategory === category ? 'btn-primary' : 'btn-outline'}`}
      >
        {category}
      </button>
    ))}
  </div>
);

export default function Page() {
  const [activeCategory, setActiveCategory] = useState(null);
  const posts = getAllPostsMeta()


  return (
    <section className="py-24 bg-secondary-content">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-accent-content font-bold mb-8">All Posts</h1>
        
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
        
        {posts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No posts found in this category.
          </p>
        )}
      </div>
    </section>
  );
}