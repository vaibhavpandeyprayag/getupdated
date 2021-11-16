import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import {
  News,
  TOP_HEADLINES,
  INDIA,
  SPORTS,
  BUSINESS,
  TECHNOLOGY,
  HEALTH,
  ENTERTAINMENT,
  SCIENCE,
  SEARCH,
} from "../definitions";
import NewsTile from "../components/NewsTile";
import { SearchIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
interface Props {}

const HomePage: FC<Props> = (props) => {
  const [keywords, setKeywords] = useState("");
  const [URL, setURL] = useState(TOP_HEADLINES);
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error));
  }, [URL]);
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center w-full text-white bg-blue-700">
        <div className="flex flex-col w-full sm:w-full md:w-2/3 lg:2/3">
          <div className="flex justify-center">
            <Link
              to="/weather"
              className="text-xl mr-8 transform hover:scale-110 active:scale-125 transition-all"
            >
              Weather
            </Link>
            <Link
              to="/weather"
              className="text-xl mr-8 transform hover:scale-110 active:scale-125 transition-all"
            >
              Sports
            </Link>
          </div>
          <div className="flex flex-col w-full items-center px-4 py-16">
            <h1 className="text-6xl  font-semibold transition-all duration-200 filter drop-shadow-heading">
              get updated
            </h1>
            <h1 className="mt-8 text-xl text-center font-semibold">
              A reliable source of news links all over the world.
            </h1>
          </div>
          <div className="flex flex-col items-center my-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-2 gap-2 text-xl sm:text-xl md:text-base lg:text-base">
              <button
                onClick={() => setURL(TOP_HEADLINES)}
                className="transform hover:scale-110 active:scale-125 transition-all"
              >
                Top-headlines
              </button>
              <button
                onClick={() => setURL(INDIA)}
                className="transform hover:scale-110 active:scale-125 transition-all"
              >
                India
              </button>
              <button
                onClick={() => setURL(SPORTS)}
                className="transform hover:scale-110 active:scale-125 transition-all"
              >
                Sports
              </button>
              <button
                onClick={() => setURL(BUSINESS)}
                className="transform hover:scale-110 active:scale-125 transition-all"
              >
                Business
              </button>
              <button
                onClick={() => setURL(TECHNOLOGY)}
                className="transform hover:scale-110 active:scale-125 transition-all"
              >
                Technology
              </button>
              <button
                onClick={() => setURL(HEALTH)}
                className="transform hover:scale-110 active:scale-125 transition-all"
              >
                Health
              </button>
              <button
                onClick={() => setURL(ENTERTAINMENT)}
                className="transform hover:scale-110 active:scale-125 transition-all"
              >
                Entertainment
              </button>
              <button
                onClick={() => setURL(SCIENCE)}
                className="transform hover:scale-110 active:scale-125 transition-all"
              >
                Science
              </button>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 px-4 h-9 w-full sm:w-full md:w-11/12 lg:w-1/2"
            >
              <input
                onChange={(e) => setKeywords(e.currentTarget.value)}
                className="flex-1 p-1 rounded-md outline-none focus:border-2 border-black text-black"
                placeholder="Type comma separated keywords"
              />
              <button
                onClick={() => {
                  if (keywords !== "") {
                    setKeywords(keywords.trim());
                    var searchQuery = keywords.replace(",", " OR ");
                    setURL(SEARCH + searchQuery);
                  }
                }}
              >
                <SearchIcon className="w-8 h-8 transform active:scale-75" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-full md:w-11/12 lg:w-4/6 mt-8">
        {news.map((eachNews, index) => (
          <NewsTile
            key={index}
            title={eachNews.title}
            url={eachNews.url}
            publishedAt={eachNews.publishedAt}
            description={eachNews.description}
            image={eachNews.image}
          />
        ))}
      </div>
    </div>
  );
};

HomePage.defaultProps = {};

export default memo(HomePage);
