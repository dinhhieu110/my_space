import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { _id, title, description, image, category } = project;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/projects/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
    >
      <img
        src={image}
        alt="image"
        className="aspect-video object-cover w-full"
      />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 text-gray-900 font-medium">{title}</h5>
        <p
          className="mb-3 text-xs text-gray-600"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        ></p>
      </div>
    </div>
  );
};

export default ProjectCard;
