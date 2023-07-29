import './Flashcards.css';
import { BiArrowBack } from 'react-icons/bi';
import { useState } from 'react';
import {
  BsCheckLg,
  BsArrowClockwise,
  BsArrowCounterclockwise,
  BsBookmarkFill,
  BsBookmark,
} from 'react-icons/bs';

function Flashcards({ onClose }) {
  const [hasBookmark, setHasBookmark] = useState(false);

  function handleSave() {
    setHasBookmark((current) => !current);
  }

  function handleClose() {
    onClose();
  }
  return (
    <div className="container-3">
      <div className="flashcard-section">
        <button>
          <BsArrowCounterclockwise className="back-arrow" />
        </button>
        <div className="flashcard">
          <button onClick={handleSave} className="save-2">
            {hasBookmark ? <BsBookmarkFill /> : <BsBookmark />}
          </button>
          <h2>Flashcards contents</h2>
          <button className="choose-2">
            <BsCheckLg />
          </button>
        </div>
        <div className="flashcard tilted-card"></div>
        <button>
          <BsArrowClockwise className="forward-arrow" />
        </button>
        <button onClick={handleClose} className="return">
          <BiArrowBack className="return" />
        </button>
      </div>
    </div>
  );
}

export default Flashcards;
