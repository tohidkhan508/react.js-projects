import React from "react";
import Heroslider from "../sections/blog/Heroslider";
import BlogSection from "../sections/blog/BlogSection";

const Blog = () => {
  return (
    <>
      <Heroslider />
      <div className="max-w-7xl mx-auto flex justify-center mb-20">
        <BlogSection />
      </div>
    </>
  );
};

export default Blog;
