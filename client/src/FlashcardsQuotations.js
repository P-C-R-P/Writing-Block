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

function FlashcardsQuotations({ onClose }) {
  const [hasBookmark, setHasBookmark] = useState(false);
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const [previous, setPrevious] = useState({
    quote: [],
    author: []
  });

  async function fetchQuote() {
    fetch('http://localhost:3001/quotation')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }
  useEffect(() => {
    fetchQuote();
  }, []);

    function handleBookmark() {
      if (!hasBookmark) {
        try {
          fetch('http://localhost:3001/prompts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'Quotation',
              text: quote,
              author: author,
            }),
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json());
        } catch (error) {
          console.log(error);
        }
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
    setPrevious({ quote, author });
    fetchQuote();
  }

  function handleUndo() {
    setQuote(previous.quote);
    setAuthor(previous.author);
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
          <div className="quote-div">
            <h2 className="title">{quote}</h2>
            <h3 className="author">{author}</h3>
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

export default FlashcardsQuotations;
