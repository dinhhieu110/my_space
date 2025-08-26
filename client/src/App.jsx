import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AddBlog,
  Blog,
  BlogList,
  Blogs,
  Dashboard,
  Layout,
  Me,
  Comment,
} from "./pages";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="list-blogs" element={<BlogList />} />
          <Route path="comments" element={<Comment />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
