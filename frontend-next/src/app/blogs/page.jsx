import Link from "next/link";
import Image from 'next/image'
import { getAllPostsMeta } from "@/lib/mdx";

export default async function Page() {
  const posts = await getAllPostsMeta();
  return (
    <section className="py-24 bg-base-100">
      <div className="container">
        <h1 className="text-3xl text-base-content font-bold">All Posts</h1>
        {posts?.map((post) => (
          <div
            key={post?.title}
            className="card card-compact bg-base-100 w-96 shadow-xl "
          >
            <Link
              href={`blogs/${post.slug}`}
              className="p-8 rounded-md shadow-md"
            >
              <figure>
                <Image
                  src={post.coverImg} 
                  alt={post.title}
                  width={600}
                  height={400}
                />
              </figure>
              <div className="card-body text-base-content">
                <h2 className="card-title text-base-content">
                  {post.title}
                  <time className="badge badge-secondary">
                    {post.publishDate}
                  </time>
                </h2>
                <p className="mt-4 text-sm text-base-content">{post.author}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
