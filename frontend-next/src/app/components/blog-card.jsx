import Link from "next/link";
import Image from 'next/image'
const BlogCard = ({ post }) => {
  return (
    <article
      className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg flex flex-col"
    >
      <Link href={`blogs/${post.slug}`} className="flex flex-col h-full">
        {post.coverImg && (<div className="relative w-full h-48">
          <Image
            className="object-cover"
            src={post.coverImg}
            alt={post.title}
            fill
          />
        </div>)}
        <div className="p-6 flex-grow flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4 flex-grow">{post.synopsis}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.category.map(category => (
                  <span key={category} className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded">
                    {category}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground">{post.author}</span>
                </div>
                <time className="text-sm text-muted-foreground" dateTime={post.publishDate}>{post.publishDate}</time>
              </div>
            </div>
      </Link>
    </article>
  );
};
export default BlogCard;
