import { useState } from "react";
import Keyboard from "./components/Keyboard";
import Score from "./components/Score";
import Guess from "./components/Guess";

function App() {
  const [attempts, setAttemps] = useState(0);
  const [word, setWord] = useState("united kingdom");
  const [guesses, setGuesses] = useState({});

  console.log(guesses);

  const maskWord = (word) => {
    let masked = "";
    for (let i = 0; i < word.length; i++) {
      if (guesses[word[i]] || word[i] === " ") {
        masked += word[i];
      } else {
        masked += "_";
      }
    }

    return masked;
  };

  const handleClick = (value) => {
    console.log(value);
    //only adds if we miss
    if (!word.includes(value)) {
      setAttemps(attempts + 1);
    }

    setGuesses({ ...guesses, [value]: true });
  };
  return (
    <div className="">
      <Guess phrase={maskWord(word)} />
      <Score max={5} current={attempts} />
      <Keyboard handleClick={handleClick} />
    </div>
  );
}

export default App;
