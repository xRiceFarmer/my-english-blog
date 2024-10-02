
import { getPostBySlug } from '@/lib/mdx'
import Image from 'next/image'
import ScrollSpy from '@/app/components/ScrollSpy'
const getPageContent = async slug => {
  const { meta, content, headings } = await getPostBySlug(slug)
  return { meta, content, headings }
}

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
} 

const Page = async ({ params }) => {
  const { meta, content, headings } = await getPageContent(params.slug)

  return (
    <section className='py-24 bg-base-100'>
      {meta.coverImg && <Image
            src={meta.coverImg}
            alt={meta.title}
            width={600}
            height={400}
          />}
      <div className='container py-4 prose'>{content}</div>
      <ScrollSpy headings={headings} />
    </section>
  )
}

export default Page