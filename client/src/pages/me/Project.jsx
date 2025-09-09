import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, project_data } from "../../assets/assets";
import Moment from "moment";
import Footer from "../../components/layout/Footer";
import Loader from "../../components/common/Loader";

const Project = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchProjectDetails = async () => {
    const result = await project_data.find((project) => project._id === id);
    setData(result);
  };

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt="background"
        className="absolute -top-50 -z-1 opacity-50"
      />
      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary py-4 font-medium">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          Tran Dinh Hieu
        </p>
      </div>
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <div className="flex items-center justify-center w-full shadow rounded-3xl">
          <img
            src={data.image}
            alt="thumbnail"
            className="rounded-3xl aspect-video object-cover w-full"
          />
        </div>
        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

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

export default Project;
