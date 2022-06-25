import { BrowserRouter, Router, Switch } from "react-router-dom";
import GitLessons from "./pages/gitLessons";
import Routes from "./components/routes";

function App() {
  const navRoutes = Routes();
  return <>{navRoutes}</>;
}

export default App;
