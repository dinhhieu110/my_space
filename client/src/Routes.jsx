import { RoutePath } from "./utils/enums";
import {
  AddBlog,
  Blog,
  BlogList,
  Blogs,
  Dashboard,
  Layout,
  Me,
  Comment,
  Login,
  Project,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

const AppRoutes = () => {
  const isLoggedIn = true;

  return (
    <Routes>
      <Route path={RoutePath.Base} element={<Me />} />
      <Route path={RoutePath.Project} element={<Project />} />
      <Route path={RoutePath.Blogs} element={<Blogs />} />
      <Route path={RoutePath.Blog} element={<Blog />} />
      <Fragment key="Admin">
        <Route
          path={RoutePath.AdminBase}
          element={isLoggedIn ? <Layout /> : <Login />}
        >
          <Route index element={<Dashboard />} />
          <Route path={RoutePath.AdminAddBlog} element={<AddBlog />} />
          <Route path={RoutePath.AdminBlogList} element={<BlogList />} />
          <Route path={RoutePath.AdminCommentList} element={<Comment />} />
        </Route>
      </Fragment>
    </Routes>
  );
};

export default AppRoutes;
