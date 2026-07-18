import React from "react";
import Link from "next/link";
import { blogs } from "../../data/blogsData";

const BlogList: React.FC = () => {
    // Format date to display nicely
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // Extract category from description
    const getCategory = (description: string) => {
        const match = description.match(/Category:\s*([^|]+)/);
        return match ? match[1].trim() : "General";
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#023047] mb-4">Latest Blogs</h1>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <article
                            key={blog.blogId}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
                        >
                            {/* Image */}
                            {blog.imagePath && (
                                <div className="relative h-48 overflow-hidden bg-gray-200">
                                    <img 
                                        src={typeof blog.imagePath === 'object' ? (blog.imagePath as any).src : blog.imagePath} 
                                        alt={blog.title} 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                                        loading="lazy" 
                                    />
                                    {/* Category Badge */}
                                    <span className="absolute top-3 right-3 bg-[#ffb703] text-[#0f4a85] px-3 py-1 rounded-full text-xs font-semibold">{getCategory(blog.description)}</span>
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow">
                                {/* Date */}
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <span>📅</span>
                                    <span className="ml-2">{formatDate(blog.postedOn)}</span>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-bold text-[#023047] mb-2 line-clamp-2 hover:text-[#0f4a85] transition-colors">{blog.title}</h2>

                                {/* Meta Info */}
                                <div className="flex items-center justify-end pt-3 border-t border-gray-100">
                                    <Link href={`/blogs/${blog.slug}`} className="text-[#ffb703] hover:text-[#e6a300] font-semibold text-sm transition-colors">
                                        READ MORE →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {blogs.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No blogs found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogList;
