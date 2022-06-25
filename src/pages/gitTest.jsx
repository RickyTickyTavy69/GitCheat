import { useEffect } from "react";
import Points from "../components/points";
import Questions from "../components/questions";

const GitTest = () => {
  return (
    <>
      <h1 className="testTitle">Test Yourself With GanYu</h1>
      <p className="testExp">
        Now, since you have learned the Git Commands I have teached you, let's
        make a short test, so you can see if you have remembered everything
        fine. You will have to answer 5 questions about the Git Commands.
      </p>
      <Questions />
      <Points />
    </>
  );
};

export default GitTest;
