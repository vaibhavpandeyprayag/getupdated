import { FC, memo } from "react";
import HomePage from "./pages/HomePage";

interface Props {}

const App: FC<Props> = (props) => {
  return <HomePage />;
};

App.defaultProps = {};

export default memo(App);
