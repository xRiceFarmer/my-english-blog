import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/mdx'



export default async function Page() {
  const posts = await getAllPostsMeta()
  return (
    <section className='py-24 bg-base-100'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>All Posts</h1>
        <div className='flex gap-6 mt-6'>
          {posts?.map(post => (
            <Link
              href={`blogs/${post.slug}`}
              key={post?.title}
              className='p-8 rounded-md shadow-md'
            >
              <h3 className='text-xl font-semibold'>{post.title}</h3>
              <p className='mt-4 text-sm'>{post.author}</p>
              <time className='text-[12px] text-gray-400'>
                {post.publishDate}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

