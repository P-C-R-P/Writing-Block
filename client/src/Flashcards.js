import './Flashcards.css';
import { BiArrowBack } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import {
  BsCheckLg,
  BsArrowClockwise,
  BsArrowCounterclockwise,
  BsBookmarkFill,
  BsBookmark,
} from 'react-icons/bs';

function Flashcards({ onClose }) {
  const [hasBookmark, setHasBookmark] = useState(false);
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/poetrydb')
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setLines(data.lines);
      });
  }, []);

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
          <div className="poem-div">
            <h2 className="title">{title}</h2>
            <h3 className="author">{author}</h3>
            <div className="lines-div">
              {lines.map((line, index) => (
                <p key={index} className="line">
                  {line}
                </p>
              ))}
            </div>
          </div>
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
