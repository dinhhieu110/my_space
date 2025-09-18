import React from "react";
import { project_data, projectCategories } from "../../assets/assets";
import ProjectCard from "./ProjectCard";
import clsx from "clsx";
import { motion } from "motion/react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Enterprise");

  return (
    <div id="projects" className="mt-8 md:mt-16 pt-4">
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 sm:gap-8 mb-10 relative mx-8 md:mx-0">
        {projectCategories.map((category) => {
          return (
            <div key={category} className="relative text-center md:text-left">
              <button
                onClick={() => setSelectedCategory(category)}
                className={clsx("cursor-pointer text-gray-500", {
                  "text-white px-4 pt-0.5": category === selectedCategory,
                })}
              >
                {category} projects
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
        {project_data
          .filter((blog) =>
            selectedCategory === "All"
              ? true
              : blog.category === selectedCategory
          )
          .map((blog) => (
            <ProjectCard blog={blog} key={blog._id} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
