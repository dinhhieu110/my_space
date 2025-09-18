import toast from "react-hot-toast";
import { assets } from "../../assets/assets";
import { useGlobalState } from "../../contexts/AppContext";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blogId: blog, createdAt, _id } = comment;
  const blogDate = new Date(createdAt);
  const { axios } = useGlobalState();

  const handleApproveComment = async () => {
    try {
      const { data } = await axios.patch(`/admin/comments/${_id}/approve`);
      toast.success(data.message);
      fetchComments();
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleDeleteComment = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure want to delete this comment?"
      );
      if (!confirm) return;
      const { data } = await axios.delete(`/admin/comments/${_id}`);
      toast.success(data.message);
      fetchComments();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="order-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b> : {blog?.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b>:{comment.author}
        <br />
        <b className="font-medium text-gray-600">Comment</b>: {comment.content}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        {blogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              onClick={handleApproveComment}
              src={assets.tick_icon}
              className="w-5 hover:scale-110 transition-all cursor-pointer"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            onClick={handleDeleteComment}
            src={assets.bin_icon}
            className="w-5 hover:scale-110 transition-all cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
