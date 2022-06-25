import GanYu from "../assets/pctr/GanYu.webp";
import GanYuVoice from "../components/GanYuVoiceText";
import { withRouter } from "react-router-dom";

const GitLessons = () => {
  return (
    <div className="rules">
      <img className="ganYu" src={GanYu} alt="GanYu" />
      <GanYuVoice />
    </div>
  );
};

export default GitLessons;
