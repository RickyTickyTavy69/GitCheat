import { useEffect, useState } from "react";
import { Redirect, Link, useLocation } from "react-router-dom";
import useSwitchVoice from "../hooks/useSwitchVoice";

const GanYuVoice = () => {
  const [buttonsClasses, setButtonsClasses] = useState("buttons");
  const {
    actualVoice,
    switchVoice,
    voice1,
    voice15,
    looseHandler,
    looser,
    mkTest,
  } = useSwitchVoice();
  const [buttonText1, setButtonText1] = useState("Let's gooo");
  const [buttonText2, setButtonText2] = useState("No, not today");
  //const location = useLocation();

  /*useEffect(() => {
    console.log("location", location.pathname);
    setUpdate(1);
  }, [location.pathname]);*/

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
      {/*mkTest && <Redirect to="/mkTest" />*/}
      <div className="voice">
        <p className="GanYuVoice">{actualVoice}</p>
        <div className={buttonsClasses}>
          {actualVoice !== voice15 && (
            <button onClick={switchVoice} className="ganYuButton">
              {buttonText1}
            </button>
          )}
          {actualVoice === voice15 && (
            <Link to={"/mkTest/12345"}>
              <button className="ganYuButton">{buttonText1}</button>
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
