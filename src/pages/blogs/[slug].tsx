import BlogDetails from "@/components/blogs/BlogDetails";
import { blogs } from "@/data/blogsData";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Page({ blog }: { blog: any }) {
    return (
        <BlogDetails blog={blog} />
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = blogs.map((blog) => ({
        params: { slug: blog.slug },
    }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const blog = blogs.find((b) => b.slug === slug) || null;
    return {
        props: {
            blog,
        },
    };
}
