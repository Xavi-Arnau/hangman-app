import { useEffect, useState } from "react";
import Keyboard from "./components/Keyboard";
import Score from "./components/Score";
import Guess from "./components/Guess";
import Modal from "./components/Modal";
import { countryList } from "./data";

const MAX = 5;

function App() {
  const [attempts, setAttemps] = useState(0);
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [game, setGame] = useState(0);

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

  const fetchData = () => {
    const randomElement =
      countryList[Math.floor(Math.random() * countryList.length)];

    return randomElement.toLowerCase();
  };

  useEffect(() => {
    setWord(fetchData());
  }, []);

  useEffect(() => {
    if (attempts === MAX) {
      setShowModal(true);
    }
  }, [attempts]);

  const handleClick = (value) => {
    console.log(value);
    //only adds if we miss
    if (!word.includes(value)) {
      setAttemps(attempts + 1);
    }

    setGuesses({ ...guesses, [value]: true });
  };
  const handleNewGame = (value) => {
    setShowModal(false);
    setAttemps(0);
    setGuesses({});
    setWord(fetchData());
    setGame(game + 1);
  };
  return (
    <div className="">
      <Guess phrase={maskWord(word)} />
      <Score max={MAX} current={attempts} />
      <Keyboard handleClick={handleClick} key={game} />

      {showModal && <Modal onClick={handleNewGame} word={word} />}
    </div>
  );
}

export default App;
