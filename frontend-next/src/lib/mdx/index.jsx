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
    },
}

const slugify = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  
export const getPostBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory,`${realSlug}`, `index.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const headings = []
  const headingCounts = { h1: 0, h2: 0, h3: 0 }

  const headingComponents = {
    h1: ({ children }) => {
      headingCounts.h1++
      const id = `h1-${headingCounts.h1}-${slugify(children)}`
      headings.push({ id, slug: children, level: 1 })
      return <h1 id={id}>{children}</h1>
    },
    h2: ({ children }) => {
      headingCounts.h2++
      const id = `h2-${headingCounts.h2}-${slugify(children)}`
      headings.push({ id, slug: children, level: 2 })
      return <h2 id={id}>{children}</h2>
    },
    h3: ({ children }) => {
      headingCounts.h3++
      const id = `h3-${headingCounts.h3}-${slugify(children)}`
      headings.push({ id, slug: children, level: 3 })
      return <h3 id={id}>{children}</h3>
    },
  }

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: { ...components, ...headingComponents }
  })
  const coverImg = frontmatter.coverImg 
    ? `/posts/${realSlug}/${frontmatter.coverImg}`
    : null

  return { meta: { ...frontmatter, slug: realSlug, coverImg: coverImg }, content, headings }
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