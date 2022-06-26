import { useState } from "react";
import GanYuVoice from "../components/GanYuVoiceText";

const useSwitchVoice = () => {
  const voice1 = `Hey Traveler! I'm GanYu and today I'm going to teach you a couple of
          useful Git Commands you can then use! Read everything carefully and try to remeber everything! Thereafter you can test yourself
          to find out if everything is fine noticed. Are you ready?`;
  const voice2 = `You can use "git init" to install a new local git repository into your project folder`;
  const voice3 = `Next one is "git add ." you can use this one to add every file you have created for the next commit`;
  const voice4 = `When you added everything you want, using the previous command, you can use "git commit -m 'message' " to create a new commit.
  Please, replace 'message' by a message, which explains the changes you have made. Later you will be able to look at your commits and know exactly,
  which changes were made in each of them.`;
  const voice5 = `Use "git push" to send your current local repository to your gitHub repository`;
  const voice6 = `"git log" shows all the commits you've created until now.`;
  const voice7 = `"git log --oneline" shows alle the commits created by you till now in short form`;
  const voice8 = ` " git branch “name” " creates a new branch. Replace “name” by a name you want to call your branch`;
  const voice9 = ` Use "git branch -a" to see all branches you have created`;
  const voice10 = ` You can delete a branch using " git branch -d “name” ". But take care! `;
  const voice11 = `You can choose between branches using "git checkout"`;
  const voice12 = `If you want to download the current version of the gitHub repository, just use "git pull" `;
  const voice13 = ` "git clone" makes a copy of a gitHub repository to your local folder`;
  const voice14 = `And the last one - "git merge". You can use this one, to put two different branches together.`;
  const voice15 = `Thats's all! I hope you have remembered this Git Commands I told you about. Now It's the time for a short test. Time to begin work! `;
  const [mkTest, setMkTest] = useState(false);
  const [looser, setLooser] = useState(false);
  const [actualVoice, setActualVoice] = useState(voice1);

  const looseHandler = () => {
    setActualVoice(voice1);
  };

  const switchVoice = () => {
    if (actualVoice === voice1) {
      setActualVoice(voice2);
    }
    if (actualVoice === voice2) {
      setActualVoice(voice3);
    }
    if (actualVoice === voice3) {
      setActualVoice(voice4);
    }
    if (actualVoice === voice4) {
      setActualVoice(voice5);
    }
    if (actualVoice === voice5) {
      setActualVoice(voice6);
    }
    if (actualVoice === voice6) {
      setActualVoice(voice7);
    }
    if (actualVoice === voice7) {
      setActualVoice(voice8);
    }
    if (actualVoice === voice8) {
      setActualVoice(voice9);
    }
    if (actualVoice === voice9) {
      setActualVoice(voice10);
    }
    if (actualVoice === voice10) {
      setActualVoice(voice11);
    }
    if (actualVoice === voice10) {
      setActualVoice(voice11);
    }
    if (actualVoice === voice11) {
      setActualVoice(voice12);
    }
    if (actualVoice === voice12) {
      setActualVoice(voice13);
    }
    if (actualVoice === voice13) {
      setActualVoice(voice14);
    }
    if (actualVoice === voice14) {
      setActualVoice(voice15);
    }
    if (actualVoice === voice15) {
      setMkTest(true);
    }
  };

  return {
    actualVoice,
    setActualVoice,
    switchVoice,
    voice1,
    voice15,
    looseHandler,
    looser,
    mkTest,
  };
};

export default useSwitchVoice;
