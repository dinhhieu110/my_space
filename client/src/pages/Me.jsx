import Hero from "../components/common/Hero";
import Navbar from "../components/layout/Navbar";
import BlogList from "../components/common/BlogList";
import NewsLetter from "../components/common/NewsLetter";
import Footer from "../components/layout/Footer";
const Me = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BlogList />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Me;
