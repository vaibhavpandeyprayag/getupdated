import { FC, memo } from "react";
import { Weather } from "../definitions";
import tempBack from "../tempBackImage.jpg";

interface Props extends Weather {}

const WeatherTile: FC<Props> = ({ name, main, weather, wind }) => {
  return (
    <div
      className="flex flex-col gap-8 mx-2 p-4 border-0 w-full sm:w-full md:w-2/3 lg:w-2/3 rounded-lg bg-no-repeat bg-cover text-gray-900"
      style={{ backgroundImage: "url(" + tempBack + ")" }}
    >
      <h1 className="text-4xl font-bold underline text-gray-700">{name}</h1>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-8">
        <div className="flex flex-col gap-3 w-1/2">
          <h3 className="text-2xl font-bold">{main.temp} F&deg;</h3>
          <h3 className="text-lg font-semibold">
            <span className="italic">Feels Like </span>
            {main.feels_like} F&deg;
          </h3>
          <h3 className="text-lg font-semibold">
            <span className="italic">Max temp.</span>
            {main.temp_min} F&deg;
          </h3>
          <h3 className="text-lg font-semibold">
            <span className="italic">Min temp. </span>
            {main.temp_min} F&deg;
          </h3>
          <h3 className="text-lg font-semibold">
            <span className="italic">Humidity </span>
            {main.humidity}
          </h3>
          <h3 className="text-lg font-semibold">
            <span className="italic">Pressure </span>
            {main.pressure}
          </h3>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Weather</h3>
            <h3 className="font-semibold text-lg italic">
              {weather[0].description}
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Wind</h3>
            <h3 className="text-lg font-semibold">
              <span className="italic">Degree </span>
              {wind.deg}
            </h3>
            <h3 className="text-lg font-semibold">
              <span className="italic">Speed </span>
              {wind.speed}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

WeatherTile.defaultProps = {};

export default memo(WeatherTile);
