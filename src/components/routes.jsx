import { Route } from "react-router-dom";
import GitTest from "../pages/gitTest";
import GitLessons from "../pages/gitLessons";
import { BrowserRouter } from "react-router-dom";
import Gratz from "../pages/Gratz";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/gratz" exact component={Gratz} />
        <Route path="/mkTest/:params" exact component={GitTest} />
        <Route path="/" exact component={GitLessons} />
      </BrowserRouter>
    </>
  );
};

export default Routes;
