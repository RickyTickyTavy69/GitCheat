import { useState } from "react";
import { Redirect } from "react-router-dom";

const Questions = () => {
  const question1 = `1. How to install a local git repository?`;
  const answer1a = `you have to download it from apple store`;
  const answer1b = `you use the command "install new local repository"`;
  const answer1c = `you can use the command "git init" `;
  const question2 = `2. How do you add everything for the next commit?`;
  const answer2a = `you take it with you hands and put in the box`;
  const answer2b = `use the command "git add ."`;
  const answer2c = `you can use the command "git put inside ." `;
  const question3 = `3. How to create a new commit?`;
  const answer3a = `git commit -m “message”`;
  const answer3b = `hey, siri! create new commit`;
  const answer3c = `hey google! create new commit`;
  const question4 = `4. How to send a local repository to your GitHub repository?`;
  const answer4a = `git push`;
  const answer4b = `git send`;
  const answer4c = `git let's goo`;
  const question5 = `5. How to create a new branch?`;
  const answer5a = `You can not create new branch. It is impossible`;
  const answer5b = `git create branch “name”`;
  const answer5c = `git branch “name”`;

  const [gitQuestion, setGitQuestion] = useState(question1);
  const [gitAnswerA, setGitAnswerA] = useState(answer1a);
  const [gitAnswerB, setGitAnswerB] = useState(answer1b);
  const [gitAnswerC, setGitAnswerC] = useState(answer1c);
  const yourAnswers = [1, 2, 3, 4, 5];

  const [ready, setReady] = useState(false);

  const rightAnswers = {
    1: answer1c,
    2: answer2b,
    3: answer3a,
    4: answer4a,
    5: answer5c,
  };

  const updateAnswer = () => {
    if (gitQuestion === question1) {
      setGitQuestion(question2);
      setGitAnswerA(answer2a);
      setGitAnswerB(answer2b);
      setGitAnswerC(answer2c);
    }
    if (gitQuestion === question2) {
      setGitQuestion(question3);
      setGitAnswerA(answer3a);
      setGitAnswerB(answer3b);
      setGitAnswerC(answer3c);
    }
    if (gitQuestion === question3) {
      setGitQuestion(question4);
      setGitAnswerA(answer4a);
      setGitAnswerB(answer4b);
      setGitAnswerC(answer4c);
    }
    if (gitQuestion === question4) {
      setGitQuestion(question5);
      setGitAnswerA(answer5a);
      setGitAnswerB(answer5b);
      setGitAnswerC(answer5c);
    }
    if (gitQuestion === question5) {
      setReady(true);
    }
  };

  const checkAnswer = (event) => {
    const num = Number(gitQuestion.substring(0, 1));
    if (num === 1) {
      const answersJson = JSON.stringify(yourAnswers);
      localStorage.setItem("your answers", answersJson);
    }
    const answer = rightAnswers[num];
    const urAnswer = event.target.innerHTML;
    console.log(answer === urAnswer);
    saveAnswer(answer === urAnswer, num);
    updateAnswer();
  };

  const saveAnswer = (result, num) => {
    if (result === true) {
      const resultsJson = localStorage.getItem("your answers");
      const results = JSON.parse(resultsJson);
      results[num - 1] = true;
      const resultsJson2 = JSON.stringify(results);
      localStorage.setItem("your answers", resultsJson2);
    }
    if (result === false) {
      const resultsJson = localStorage.getItem("your answers");
      const results = JSON.parse(resultsJson);
      results[num - 1] = false;
      const resultsJson2 = JSON.stringify(results);
      localStorage.setItem("your answers", resultsJson2);
    }
  };

  return (
    <>
      {ready && <Redirect to="/gratz" />}
      <div className="questions">
        <div className="question">{gitQuestion}</div>
        <div className="answers">
          <button onClick={checkAnswer} className="answerButton">
            {gitAnswerA}
          </button>
          <button onClick={checkAnswer} className="answerButton">
            {gitAnswerB}
          </button>
          <button onClick={checkAnswer} className="answerButton">
            {gitAnswerC}
          </button>
        </div>
      </div>
    </>
  );
};

export default Questions;
