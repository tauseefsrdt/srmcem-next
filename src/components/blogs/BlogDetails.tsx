import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Classes from "../../utils/styles/Global.module.css";
import { blogs } from "../../data/blogsData";

const BlogDetails: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    
    if (!router.isReady) {
        return <div className="py-20 text-center text-gray-500">Loading...</div>;
    }

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-2xl font-bold text-gray-800">Blog Not Found</h1>
                <p className="text-gray-500 mt-2">The blog post you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="py-12 bg-white">
            <Head>
                {/* Title */}
                <title>{blog.metaTitle || blog.title}</title>

                {/* Meta Description */}
                {blog.metaDescription && (
                    <meta name="description" content={blog.metaDescription} />
                )}

                {/* Meta Keywords */}
                {blog.metaKeyword && blog.metaKeyword !== "undefined" && (
                    <meta name="keywords" content={blog.metaKeyword} />
                )}

                {/* JSON-LD Schema (seoConfig) */}
                {blog.seoConfig && (
                    <script 
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: blog.seoConfig }}
                    />
                )}
            </Head>
            <div className={Classes["container"]}>
                <div className="container mx-auto px-4">
                    <h1 className="font32 fw500 text-[#023047] leading-9 mb-6">{blog.title}</h1>

                    <div
                        className="
                            text-[15px] text-justify
                            [&_a]:font-normal!
                            [&_a]:inline-block!
                            [&_a]:px-1!
                            [&_table]:w-full
                            [&_table]:border
                            [&_table]:border-[#d9d9d9]
                            [&_table]:border-collapse
                            [&_table]:my-6
                            [&_th]:border
                            [&_th]:border-[#d9d9d9]
                            [&_th]:bg-[#f5f5f5]
                            [&_th]:text-center
                            [&_th]:px-3
                            [&_th]:py-2
                            [&_th]:text-[14px]
                            [&_th]:font-semibold
                            [&_td]:border
                            [&_td]:border-[#d9d9d9]
                            [&_td]:px-3
                            [&_td]:py-2
                            [&_td]:text-[14px]
                            [&_td]:align-top
                        "
                        dangerouslySetInnerHTML={{
                            __html: blog.description ? blog.description.replace(/<h1\b/gi, "<h2").replace(/<\/h1>/gi, "</h2>") : "",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
