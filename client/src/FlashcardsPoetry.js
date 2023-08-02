import './Flashcards.css';
import { BiArrowBack } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import {
  BsCheckLg,
  BsArrowClockwise,
  BsArrowCounterclockwise,
  BsBookmarkFill,
  BsBookmark,
} from 'react-icons/bs';

function FlashcardsPoetry({ onClose }) {
  const [hasBookmark, setHasBookmark] = useState(false);
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [lines, setLines] = useState([]);
  const [previous, setPrevious] = useState({
    title: [],
    author: [],
    lines: []
  })

  async function fetchPoem() {
    fetch('http://localhost:3001/poetry')
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setLines(data.lines);
      });
  }
  useEffect(() => {
    fetchPoem();
  }, []);

    function handleBookmark() {
      if (!hasBookmark) {
        const poemLines = lines.join('\n');
        try {
          fetch('http://localhost:3001/prompts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              text: poemLines,
              author: author,
            }),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json());
        } catch (error) {
          console.log(error);
        }
        // save to database
      }
      // if (hasBookmark) {
      //   try {
      //     fetch('http://localhost:3001/prompts', {
      //       method: 'POST',
      //       body: JSON.stringify({
      //         title: 'Story idea',
      //         text: data,
      //         author: 'OpenAI',
      //       }),
      //       headers: { 'Content-Type': 'application/json' },
      //     }).then((response) => response.json());
      //   } catch (error) {
      //     console.log(error);
      //   }
      // delete from database
      // }
    }

  function handleSave() {
    setHasBookmark((current) => !current);
    handleBookmark(hasBookmark);
  }

  function handleClose() {
    onClose();
  }

  function handleRefresh() {
    setPrevious({title, author, lines})
    fetchPoem();
  }

  function handleUndo() {
    setTitle(previous.title);
    setAuthor(previous.author);
    setLines(previous.lines);
  }

  return (
    <div className="container-3">
      <div className="flashcard-section">
        <button onClick={handleUndo}>
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
              {lines.map((line, key) => (
                <p key={key} className="line">
                  {line}
                </p>
              ))}
            </div>
          </div>
          {/* <button className="choose-2">
            <BsCheckLg />
          </button> */}
        </div>
        <div className="flashcard tilted-card"></div>
        <button onClick={handleRefresh}>
          <BsArrowClockwise className="forward-arrow" />
        </button>
        <button onClick={handleClose} className="return">
          <BiArrowBack className="return" />
        </button>
      </div>
    </div>
  );
}

export default FlashcardsPoetry;
