import './Home.css';
import { useState } from 'react';

import Flashcards from './Flashcards';
import Prompts from './Prompts';
import Saved from './Saved';
import Submitted from './Submitted';

function Home() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(true);
  }
  const handleClose = () => {
    setIsShown(false);
  }

  return (
    <>
      {isShown && <Submitted />}
      <div className="container-1">
        <div className="block-section">
          <button
            onClick={handleClick}
            value="submitted"
            className="block submissions"
          >
            <h2>View submitted stories</h2>
          </button>
          <button onClick={handleClick} value="sentence" className="block">
            <h2>Generate a first sentence</h2>
          </button>
          <button onClick={handleClick} value="story" className="block">
            <h2>Generate a story idea</h2>
          </button>
          <button onClick={handleClick} value="poetry" className="block">
            <h2>View poetry flashcards</h2>
          </button>
          <button onClick={handleClick} value="quotations" className="block">
            <h2>View quotation flashcards</h2>
          </button>
          <button
            onClick={handleClick}
            value="saved"
            className="block prompts"
          >
            <h2>View saved prompts</h2>
          </button>
        </div>
        <div className="side-menu-section">
          <h2>View submitted stories</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
