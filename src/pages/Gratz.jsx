import { useEffect, useState } from "react";

const Gratz = () => {
  const perfect = "this is perfect! You are very clever!";
  const good = "this is not the best result, but you must keep training!";
  const bad =
    "this is not good. Maybe you should better search for another profession.";
  const answersJson = localStorage.getItem("your answers");
  const answers = JSON.parse(answersJson);
  const [result, setResult] = useState(0);
  const countResult = () => {
    let num = 0;
    answers.forEach((answer) => {
      if (answer === true) {
        num = num + 1;
      }
    });
    setResult(num);
  };

  useEffect(() => {
    countResult();
  }, []);

  return (
    <>
      <h1 className="gratzTitle">Congratulationz!!!</h1>
      <p className="gratzExp">
        Today you have leared about Git Commands you can use for make your work
        with your collegues easier!
      </p>
      <p className="gratzResult">
        Your test result is {result} correct answers of 5 possible
      </p>
      {result === 5 && <p className="resultNumber">{perfect}</p>}
      {result < 5 && result > 0 && <p className="resultNumber">{good}</p>}
      {result === 0 && <p className="resultNumber">{bad}</p>}
    </>
  );
};

export default Gratz;
