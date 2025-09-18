import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../../assets/assets";
import Moment from "moment";
import Footer from "../../components/layout/Footer";
import Loader from "../../components/common/Loader";
import { useGlobalState } from "../../contexts/AppContext";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentForm, setCommentForm] = useState(null);
  const { axios } = useGlobalState();
  const fetchBlogDetails = async () => {
    try {
      const result = await axios.get(`/blogs/${id}`);
      result.data.success
        ? setBlog(result.data.blog)
        : toast.error(result.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCommentFormChange = (e) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({ ...prev, [name]: value }));
  };

  const addComment = async (e) => {
    e.preventDefault();
    console.log("commentForm:", commentForm);
    try {
      const { data } = await axios.post("/blogs/add-comment", {
        ...commentForm,
        blogId: id,
      });
      if (data.success) {
        toast.success(data.message);
        setCommentForm({ author: "", content: "" });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`/blogs/${id}/comments`);
      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
    fetchComments();
  }, []);

  return blog ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt="background"
        className="absolute -top-50 -z-1 opacity-50"
      />
      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary py-4 font-medium">
          Published on {Moment(blog.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {blog.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto">{blog.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          Tran Dinh Hieu
        </p>
      </div>
      <div className="mx-5 max-w-lg md:mx-auto my-10 mt-6">
        <div className="flex items-center justify-center w-full shadow rounded-3xl">
          <img
            src={blog.image}
            alt="thumbnail"
            className="rounded-3xl aspect-video object-cover w-full"
          />
        </div>
        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
        {/* Comments section */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">comments ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((comment, idx) => (
              <div
                key={idx}
                className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="" className="w-6" />
                  <p className="font-medium">{comment.author}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{comment.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(comment.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comment input */}
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              type="text"
              name="author"
              value={commentForm?.author}
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
              onChange={handleCommentFormChange}
            />
            <textarea
              placeholder="Comment"
              name="content"
              value={commentForm?.content}
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
              onChange={handleCommentFormChange}
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Share buttons */}
        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">
            Share this post on your social media
          </p>
          <div className="flex">
            <img src={assets.facebook_icon} alt="facebook" width={50} />
            <img src={assets.twitter_icon} alt="facebook" width={50} />
            <img src={assets.googleplus_icon} alt="facebook" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;
