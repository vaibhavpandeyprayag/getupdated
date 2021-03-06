import { FC, memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";

interface Props {}

const App: FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

App.defaultProps = {};

export default memo(App);
