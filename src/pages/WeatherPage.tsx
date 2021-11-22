import { SearchIcon } from "@heroicons/react/solid";
import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Weather, WEATHER } from "../definitions";
import WeatherTitle from "../components/WeatherTitle";

interface Props {}

const WeatherPage: FC<Props> = (props) => {
  document.title = "Get Updated - Weather";
  const [city, setCity] = useState("Delhi");
  const [URL, setURL] = useState(WEATHER + city);
  const [weatherReport, setWeatherReport] = useState<Weather>({
    name: "",
    main: {
      temp: "",
      feels_like: "",
      temp_max: "",
      temp_min: "",
      humidity: "",
      pressure: "",
    },
    weather: [{ description: "" }],
    wind: {
      deg: "",
      speed: "",
    },
  });

  useEffect(() => {
    axios.get(URL).then((response) => setWeatherReport(response.data));
  }, [URL]);
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center w-full text-white bg-blue-700">
        <div className="flex flex-col w-full sm:w-full md:w-2/3 lg:2/3">
          <div className="flex justify-center">
            <Link to="/" className="text-xl mr-8">
              News
            </Link>
          </div>
          <div className="flex flex-col w-full items-center px-4 py-16">
            <h1 className="text-6xl font-semibold transition-all duration-200 filter drop-shadow-heading">
              get updated
            </h1>
            <h1 className="mt-8 text-xl text-center font-semibold">
              A reliable source of news links all over the world.
            </h1>
          </div>
          <div className="flex flex-col items-center my-4">
            <h2 className="mb-4 text-2xl text-center font-semibold">
              Weather Report
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 px-4 h-9 w-full sm:w-full md:w-11/12 lg:w-1/2"
            >
              <input
                onChange={(e) => setCity(e.currentTarget.value.trim())}
                className="flex-1 p-1 rounded-md outline-none focus:border-2 border-black text-black"
                placeholder="Type city"
              />
              <button
                onClick={() => {
                  if (city !== "") {
                    setCity(city.trim());
                    setURL(WEATHER + city);
                  }
                }}
              >
                <SearchIcon className="w-8 h-8 transform active:scale-75" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full my-2">
        <WeatherTitle
          name={weatherReport!.name}
          main={weatherReport.main}
          weather={weatherReport.weather}
          wind={weatherReport.wind}
        />
      </div>
    </div>
  );
};

WeatherPage.defaultProps = {};

export default memo(WeatherPage);
