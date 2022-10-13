import { FC } from "react";

interface ImgShowInput {
  url: string;
  img: string;
  name: string;
}

const ImgShow: FC<ImgShowInput> = ({ url, img, name }) => {
  return (
    <div className="text-center">
      <a target="_blank" href={url}>
        <img
          className="sm:opacity-90 hover:opacity-100 shadow-lg shadow-gray-400 sm:shadow-transparent hover:shadow-gray-400 transition-all w-52 inline-block border-2 rounded-lg border-purple-400  duration-300"
          src={img}
          title={name ?? ""}
          alt="book image"
        />
      </a>
    </div>
  );
}

export default ImgShow

