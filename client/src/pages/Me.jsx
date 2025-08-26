import Hero from "../components/common/Hero";
import BlogList from "../components/common/BlogList";
import NewsLetter from "../components/common/NewsLetter";
import Footer from "../components/layout/Footer";
import { Navbar } from "./components";
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
