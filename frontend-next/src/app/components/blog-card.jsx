import Link from "next/link";
import Image from 'next/image'
const BlogCard = ({ post }) => {
  return (
    <div
      className="card card-compact bg-base-100 w-96 shadow-xl "
    >
      <Link href={`blogs/${post.slug}`} className="p-8 rounded-md shadow-md">
        {post.coverImg && <figure>
          <Image
            src={post.coverImg}
            alt={post.title}
            width={600}
            height={400}
          />
        </figure>}
        <div className="card-body text-base-content">
          <h2 className="card-title text-base-content">
            {post.title}
            <time className="badge badge-secondary">{post.publishDate}</time>
          </h2>
          <p className="mt-4 text-sm text-base-content">{post.author}</p>
        </div>
      </Link>
    </div>
  );
};
export default BlogCard;
