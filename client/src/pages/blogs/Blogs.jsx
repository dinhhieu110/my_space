import BlogList from "../../components/blogs/BlogList";
import Hero from "../../components/blogs/Hero";
import NewsLetter from "../../components/common/NewsLetter";
import Footer from "../../components/layout/Footer";

const Blogs = () => {
  return (
    <>
      <Hero />
      <BlogList />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Blogs;
