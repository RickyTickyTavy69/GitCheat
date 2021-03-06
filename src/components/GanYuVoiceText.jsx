import { useEffect, useState } from "react";
import { Redirect, Link, useLocation } from "react-router-dom";
import useSwitchVoice from "../hooks/useSwitchVoice";

const GanYuVoice = () => {
  const [buttonsClasses, setButtonsClasses] = useState("buttons");
  const { actualVoice, switchVoice, voice1, voice15, looseHandler } =
    useSwitchVoice();
  const [buttonText1, setButtonText1] = useState("Let's gooo");
  const [buttonText2, setButtonText2] = useState("No, not today");

  useEffect(() => {
    if (actualVoice !== voice1) {
      setButtonText1("fine, go to the next");
      setButtonText2("Im so tired, let's go to sleep");
    }
    if (actualVoice === voice15) {
      setButtonText1("fine, let's do the test");
      setButtonText2("can we repeat it, GanYu? I did not remeber");
      setButtonsClasses("buttonsLast");
    }
  }, [actualVoice]);

  return (
    <>
      <div className="voice">
        <p className="GanYuVoice">{actualVoice}</p>
        <div className={buttonsClasses}>
          {actualVoice !== voice15 && (
            <button onClick={switchVoice} className="ganYuButton">
              {buttonText1}
            </button>
          )}
          {actualVoice === voice15 && (
            <Link className="ganYuButton" to={"/mkTest/12345"}>
              {buttonText1}
            </Link>
          )}
          <button
            onClick={() => {
              looseHandler();
            }}
            className="ganYuButton"
          >
            {buttonText2}
          </button>
        </div>
      </div>
    </>
  );
};

export default GanYuVoice;
