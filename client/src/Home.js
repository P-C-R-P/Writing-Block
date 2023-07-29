import './Home.css';
import { useState } from 'react';

import Flashcards from './Flashcards';
import Prompts from './Prompts';
import Saved from './Saved';
import Submitted from './Submitted';

function Home() {
  const [isPromptsShown, setIsPromptsShown] = useState(false);
  const [isFlashcardsShown, setIsFlashcardsShown] = useState(false);
  const [isSavedShown, setIsSavedShown] = useState(false);
  const [isSubmittedShown, setIsSubmittedShown] = useState(false);
  function handleButtonClick(event) {
    const value = event.target.value;
    if (value === 'sentence' || value === 'story') {
      setIsPromptsShown(true);
    }
    if (value === 'poetry' || value === 'quotation') {
      setIsFlashcardsShown(true);
    }
    if (value === 'saved') {
      setIsSavedShown(true);
    }
    if (value === 'submitted') {
      setIsSubmittedShown(true);
    }
  }
  function handleTextClick(event) {
    event.stopPropagation();
    const button = event.currentTarget.parentElement;
    button.click();
  }
  function handleClose(event) {
    setIsPromptsShown(false);
    setIsFlashcardsShown(false);
    setIsSavedShown(false);
    setIsSubmittedShown(false);
  }

  return (
    <>
      {isPromptsShown && <Prompts onClose={handleClose} />}
      {isFlashcardsShown && <Flashcards onClose={handleClose} />}
      {isSavedShown && <Saved onClose={handleClose} />}
      {isSubmittedShown && <Submitted onClose={handleClose} />}
      <div className="container-1">
        <div className="block-section">
          <button
            onClick={handleButtonClick}
            value="sentence"
            className="block"
          >
            <h2 onClick={handleTextClick}>Generate a first sentence</h2>
          </button>
          <button onClick={handleButtonClick} value="story" className="block">
            <h2 onClick={handleTextClick}>Generate a story idea</h2>
          </button>
          <button onClick={handleButtonClick} value="poetry" className="block">
            <h2 onClick={handleTextClick}>View poetry flashcards</h2>
          </button>
          <button
            onClick={handleButtonClick}
            value="quotation"
            className="block"
          >
            <h2 onClick={handleTextClick}>View quotation flashcards</h2>
          </button>
          <button
            onClick={handleButtonClick}
            value="saved"
            className="block prompts"
          >
            <h2 onClick={handleTextClick}>View saved prompts</h2>
          </button>
          <button
            onClick={handleButtonClick}
            value="submitted"
            className="block submissions"
          >
            <h2 onClick={handleTextClick}>View submitted stories</h2>
          </button>
        </div>
        <div className="side-menu-section">
          <h2>Recent stories</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
