import { getPostBySlug } from "../../../lib/mdx";
import Image from "next/image";
import ScrollSpy from "../../components/ScrollSpy"
const getPageContent = async (slug) => {
  const { meta, content, headings } = await getPostBySlug(slug);
  return { meta, content, headings };
};

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const Page = async ({ params }) => {
  const { meta, content, headings } = await getPageContent(params.slug);

  return (
    <div className="flex bg-base-100">
   
      <div className="flex-grow max-w-3xl mx-auto px-1 py-24 bg-base-100">
        {meta.coverImg && (
          <div className="relative w-full h-64 mb-8">
            <Image
              src={meta.coverImg}
              alt={meta.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        )}
        <div className="prose">{content}</div>
      </div>
      <div className="fixed bottom-24 px-4 py-14">
        <ScrollSpy headings={headings} />
      </div>
    </div>
  );
};

export default Page;
