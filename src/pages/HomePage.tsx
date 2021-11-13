import { FC, memo } from "react";
import NewsTile from "../components/NewsTile";

interface Props {}

const HomePage: FC<Props> = (props) => {
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
