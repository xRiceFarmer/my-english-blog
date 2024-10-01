
import { getPostBySlug } from '@/lib/mdx'
import Image from 'next/image'
const getPageContent = async slug => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
} 

const Page = async ({ params }) => {
  const { content, meta } = await getPageContent(params.slug)

  return (
    <section className='py-24 bg-base-100'>
      <Image
            src={meta.coverImg}
            alt={meta.title}
            width={600}
            height={400}
          />
      <div className='container py-4 prose'>{content}</div>
    </section>
  )
}

export default Page