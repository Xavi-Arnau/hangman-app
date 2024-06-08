import { useEffect, useState } from "react";
import Keyboard from "./components/Keyboard";
import Score from "./components/Score";
import Guess from "./components/Guess";
import Modal from "./components/Modal";
import { countryList, animalNames, gods } from "./data";

const MAX = 5;

function App() {
  const [attempts, setAttemps] = useState(0);
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [game, setGame] = useState(0);
  const [category, setCategory] = useState("gods");

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
    let list;
    switch (category) {
      case "countries":
        list = countryList;
        break;
      case "animals":
        list = animalNames;
        break;
      default:
        list = gods;
    }
    const randomElement = list[Math.floor(Math.random() * list.length)];

    return randomElement.toLowerCase();
  };

  useEffect(() => {
    setWord(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (attempts === MAX || isGameOver()) {
      setShowModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempts, guesses]);

  const isGameOver = () => {
    //console.log(maskWord(word), word);
    return word && maskWord(word) === word;
  };

  const handleClick = (value) => {
    //console.log(value);
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

  const handleCategorySelection = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <h1 className="bg-sky-800 text-center text-3xl text-white p-2">
        Looking for <span className="italic font-bold">{category}</span>
      </h1>
      <Guess phrase={maskWord(word)} />
      <Score max={MAX} current={attempts} />
      <Keyboard handleClick={handleClick} key={game} />

      {showModal && (
        <Modal
          onClick={handleNewGame}
          word={word}
          currentCategory={category}
          handleCategorySelection={handleCategorySelection}
          victory={attempts < MAX}
        />
      )}
    </div>
  );
}

export default App;
