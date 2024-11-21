import BlogPosts from "../components/blog-posts";
import { getAllPostsMeta } from "../../lib/mdx";

export default async function Page() {
  const posts = await getAllPostsMeta();
  return (
    <section className=" bg-base-100">
        <div className="container mx-auto px-4 py-8">
        <BlogPosts posts={posts} />
      </div>
    </section>
  );
}
