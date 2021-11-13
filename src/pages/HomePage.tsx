import axios from "axios";
import { FC, memo, useEffect } from "react";
import NewsTile from "../components/NewsTile";

interface Props {}

const HomePage: FC<Props> = (props) => {
  const URL1 = `https://newsdata.io/api/1/news?apikey=pub_1617021ca5cb93095d6e0092d449fec8dda3&language=en`;
  const URL2 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8737a276f2c34d44a104647a2dc5afcd`;
  useEffect(() => {
    axios
      .get(URL2)
      .then((response) => {
        console.log(response);
        console.log("Working...");
      })
      .catch((error) => console.log(error));
  });
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center w-full bg-blue-700">
        <div className="relative flex flex-col w-2/3">
          <div className="absolute top-2 right-0 flex gap-4 text-white">
            <h3 className="text-xl">Weather</h3>
            <h3 className="text-xl">Sports</h3>
          </div>
          <div className="flex flex-col w-full items-center py-24">
            <h1 className="text-6xl font-semibold text-white">get updated</h1>
            <h1 className="mt-8 text-xl font-semibold text-white">
              A reliable source of news links all over the world.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-2/3 mt-8">
        <NewsTile />
      </div>
    </div>
  );
};

HomePage.defaultProps = {};

export default memo(HomePage);
