import { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import { useGlobalState } from "../../contexts/AppContext";
import toast from "react-hot-toast";

const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const INIT_FORM = {
    image: null,
    title: "",
    subTitle: "",
    category: "Startup",
    isPublished: false,
    description: "",
  };
  const [form, setForm] = useState(INIT_FORM);
  const { axios } = useGlobalState();
  const [loading, setLoading] = useState(false);

  const onFormChange = (e) => {
    const { name, value, files = [], checked = false } = e.target;

    if (name === "image") {
      const file = files[0];
      setForm((prev) => ({ ...prev, [name]: file }));
      return;
    }

    if (name === "isPublished") {
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    try {
      console.log("form:", form);
      setLoading(true);
      const formData = new FormData();
      formData.append(
        "blog",
        JSON.stringify({
          title: form.title,
          subTitle: form.subTitle,
          category: form.category,
          isPublished: form.isPublished,
          description: quillRef.current.root.innerHTML,
        })
      );
      formData.append("image", form.image);
      const { data } = await axios.post(`/blogs/add`, formData);
      if (data.success) {
        toast.success(data.message);
        setForm(INIT_FORM);
        quillRef.current.root.innerHTML = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const generateContent = () => {};

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <div className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll">
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={
              form.image ? URL.createObjectURL(form.image) : assets.upload_area
            }
            alt="upload image"
            className="mt-2 h-16 rounded cursor-pointer aspect-video object-contain"
          />
          <input
            type="file"
            required
            hidden
            id="image"
            name="image"
            onChange={onFormChange}
          />
        </label>
        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          name="title"
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={onFormChange}
        />
        <p className="mt-4">Sub Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          name="subTitle"
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={onFormChange}
        />
        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
          <div ref={editorRef}></div>
          <button
            type="button"
            onClick={generateContent}
            className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 hover:bg-black/60 py-1.5 rounded cursor-pointer px-2"
          >
            Generate with AI
          </button>
        </div>
        <p className="mt-4">Blog Category</p>
        <select
          onChange={onFormChange}
          name="category"
          className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded"
        >
          <option value="">Select category</option>
          {blogCategories.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="flex gap-2 mt-4">
          <p>Publish Now</p>
          <input
            type="checkbox"
            checked={form.isPublished}
            className="scale-125 cursor-pointer"
            value={form.isPublished}
            name="isPublished"
            onChange={onFormChange}
          />
        </div>
        <button
          disabled={loading}
          onClick={handleAddBlog}
          type="submit"
          className="mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm"
        >
          {loading ? "Adding..." : "Add Blog"}
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
