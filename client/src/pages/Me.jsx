import Hero from "../components/blogs/Hero";
import Navbar from "../components/layout/Navbar";
import BlogList from "../components/blogs/BlogList";
import NewsLetter from "../components/common/NewsLetter";
import Footer from "../components/layout/Footer";
import Intro from "../components/me/Intro";
const Me = () => {
  return (
    <>
      <Intro />
      <BlogList />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Me;
