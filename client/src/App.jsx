import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blog, Blogs, Me } from "./pages";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
