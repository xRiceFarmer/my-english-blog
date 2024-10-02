import BlogPosts from "../components/blog-posts";
import { getAllPostsMeta } from "@/lib/mdx";

export default async function Page() {
  const posts = await getAllPostsMeta();
  return (
    <section className="py-24 bg-secondary-content">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-accent-content font-bold mb-8">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
        <BlogPosts posts={posts} />
        </div>
      </div>
    </section>
  );
}
