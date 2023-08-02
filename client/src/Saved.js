import './Saved.css';
import React, { useState, useEffect } from 'react';

import {
  BsBookmark,
  BsBookmarkFill,
  BsEyeglasses,
  BsTrash2,
  BsTrash2Fill,
  BsCheckLg,
} from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';

function Saved({ onClose }) {
  const [binHovered, setBinHover] = useState(false);
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/prompts')
      .then((response) => response.json())
      .then((prompts) =>
        setPrompts(prompts.sort((a, b) => new Date(b.date) - new Date(a.date)))
      );
  }, [prompts]);

  function handleDelete(id) {
    try {
      fetch(`http://localhost:3001/prompts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => response.json());
    } catch (error) {
      console.log(error);
    }
  }

  function handleClose() {
    onClose();
  }
  return (
    <div className="container-4">
      <div className="header-section-1">
        <h2>Saved Prompts</h2>
      </div>
      <div className="list-section-1">
        <ul className="list">
          {prompts.map((prompt) => (
            <div className="list-item-1" key={prompt._id}>
              <button onClick={() => handleDelete(prompt._id)}
                onMouseEnter={() => setBinHover(true)}
                onMouseLeave={() => setBinHover(false)}
                className="delete-1"
              >
                {binHovered ? <BsTrash2Fill /> : <BsTrash2 />}
              </button>
              <h3>{prompt.title}</h3>
              <h4>{prompt.author}</h4>
              {prompt.text.split('\n').map((line, index) => (
                <h5 key={index}>{line}</h5>
              ))}
            </div>
          ))}
        </ul>
        <button onClick={handleClose} className="return-1">
          <BiArrowBack />
        </button>
      </div>
    </div>
  );
}

export default Saved;
