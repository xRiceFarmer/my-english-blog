import BlogCard from "./blog-card.component"
const BlogsColumn = () => {
    return(
        <div class="column-gap-3 md: columns-3">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    )
}
export default BlogsColumn;