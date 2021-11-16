import { FC, memo, useState } from "react";
import { News } from "../definitions";
import NewsIcon from "../newsIcon.png";
import { ExternalLinkIcon } from "@heroicons/react/solid";

interface Props extends News {}

const NewsTile: FC<Props> = (props) => {
  const [showContent, setShowContent] = useState(false);
  const visiblity = showContent ? "" : " hidden";
  return (
    <div className="flex flex-col p-2 border-2 rounded-xl m-2 transform transiton-all duration-1000 ease-in-out w-auto">
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row justify-between items-center gap-4">
        <div className="flex flex-col justify-between h-full sm:h-full md:h-36 lg:h-32 text-justify w-full sm:w-full md:w-5/6 lg:3/4">
          <div className="">
            <h3
              onClick={() => {
                setShowContent(!showContent);
              }}
              className="text-xl font-bold inline mr-4 hover:text-gray-500 cursor-pointer"
            >
              {props.title}
            </h3>

            <a
              className="underline text-blue-600 hover:text-blue-800"
              rel="noreferrer"
              target="_blank"
              href={props.url}
            >
              <ExternalLinkIcon className="inline w-6 h-6" />
            </a>
          </div>
          <h2 className="mt-4 sm:mt-4 md:mt-0 lg:mt-0">
            <span className="font-bold">Time: </span> {props.publishedAt}
          </h2>
        </div>
        <img
          onError={(e) => {
            e.currentTarget.src = NewsIcon;
            e.currentTarget.className =
              "w-1/4 h-16 rounded-md object-contain border-0 ";
          }}
          className="w-full h-full sm:w-full sm:h-full  md:w-1/4 md:h-32 lg:w-1/4 lg:h-32 rounded-md object-contain border-0 "
          src={props.image}
          alt=""
        />
      </div>

      <h3 className={"mt-4" + visiblity}>{props.description}</h3>
    </div>
  );
};

NewsTile.defaultProps = {};

export default memo(NewsTile);
