import React from "react";
import { blogCategories } from "../../assets/assets";
import clsx from "clsx";
import BlogCard from "./BlogCard";
import { motion } from "motion/react";
import { useGlobalState } from "../../contexts/AppContext";
import { useMemo } from "react";
import CardSkeleton from "../common/CardSkeleton";

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const { blogs, fetchBlogs, filter, blogsLoading } = useGlobalState();
  const filteredBlogs = useMemo(() => {
    if (!filter) return blogs;
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(filter.toLowerCase()) ||
        blog.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, blogs]);

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((category) => {
          return (
            <div key={category} className="relative">
              <button
                onClick={() => setSelectedCategory(category)}
                className={clsx("cursor-pointer text-gray-500", {
                  "text-white px-4 pt-0.5": category === selectedCategory,
                })}
              >
                {category}
                {category === selectedCategory && (
                  <motion.div
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className={clsx(
                      "absolute left-0 right-0 top-0 bg-primary h-7 -z-1 rounded-full"
                    )}
                  ></motion.div>
                )}
              </button>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blogsLoading
          ? Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
          : (filteredBlogs || [])
              .filter((blog) =>
                selectedCategory === "All"
                  ? true
                  : blog.category === selectedCategory
              )
              .map((blog) => <BlogCard blog={blog} key={blog._id} />)}
      </div>
    </div>
  );
};

export default BlogList;
