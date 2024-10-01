import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import Slider from '@/app/components/Slider'
import Image from 'next/image'
import YouTube from '@/app/components/YouTube'
import MultipleChoiceQuiz from '@/app/components/MCQs'

const rootDirectory = path.join(process.cwd(),'public', 'posts')

const components = {
    Slider,
    YouTube,
    MultipleChoiceQuiz,
    img: (props) => {
      const { src, alt, ...rest } = props
      const fullSrc = src.startsWith('/') ? src : `/posts/${src}`
      return (
        <Image
          src={fullSrc}
          alt={alt}
          width={600}
          height={400}
          {...rest}
        />
      )
    }
}

export const getPostBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory,`${realSlug}`, `index.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: components
  })
  const coverImg = frontmatter.coverImg 
    ? `/posts/${realSlug}/${frontmatter.coverImg}`
    : null

  return { meta: { ...frontmatter, slug: realSlug, coverImg: coverImg }, content }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  let posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}