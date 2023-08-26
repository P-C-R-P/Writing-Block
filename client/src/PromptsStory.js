import './Prompts.css';
import { BiArrowBack } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import {
  BsBookmark,
  BsBookmarkFill,
  BsArrowClockwise,
  BsArrowCounterclockwise,
} from 'react-icons/bs';
import Editor from './Editor';

// eslint-disable-next-line react/prop-types
function PromptsStory({ onClose }) {
  const [hasBookmark, setHasBookmark] = useState(false);
  const [data, setData] = useState([]);
  const [previous, setPrevious] = useState([]);

  function handleBookmark() {
    if (!hasBookmark) {
      try {
        fetch('http://localhost:3001/prompts', {
          method: 'POST',
          body: JSON.stringify({
            title: 'Story Idea',
            text: data,
            author: 'OpenAI',
          }),
          headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json());
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handleSave() {
    setHasBookmark((current) => !current);
    handleBookmark(hasBookmark);
  }

  function handleClose() {
    onClose();
  }

  async function fetchIdea() {
    fetch('http://localhost:3001/idea')
      .then((response) => response.json())
      .then((d) => {
        setData(d.data);
      });
  }

  function handleRefresh() {
    setPrevious(data);
    fetchIdea();
  }

  function handleUndo() {
    setData(previous);
  }

  useEffect(() => {
    fetchIdea();
  }, []);

  return (
    <div className="container-2">
      <div className="prompt-section">
        <button onClick={handleUndo}>
          <BsArrowCounterclockwise className="back-arrow" />
        </button>
        <div className="prompt-area">
          <div className="prompt">
            <button onClick={handleSave} className="save-1">
              {hasBookmark ? <BsBookmarkFill /> : <BsBookmark />}
            </button>
            <h2>{data}</h2>
          </div>
        </div>
        <button onClick={handleRefresh}>
          <BsArrowClockwise className="forward-arrow" />
        </button>
      </div>
      <div className="text-section">
        <div className="text-area">
          <Editor />
        </div>
      </div>
      <button onClick={handleClose}>
        <BiArrowBack className="return" />
      </button>
    </div>
  );
}

export default PromptsStory;
