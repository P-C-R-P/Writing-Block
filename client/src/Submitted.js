import './Submitted.css';
import { BsEyeglasses } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';

function Submitted({ onClose }) {
  const [submissions, setSubmissions] = useState([]);
  const [isViewed, setIsViewed] = useState(false);
  const [isFocused, setIsFocused] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/submissions')
      .then((response) => response.json())
      .then((submissions) =>
        setSubmissions(
          submissions.sort((a, b) => new Date(b.date) - new Date(a.date))
        )
      );
  }, []);

  function handleView(text) {
    setIsViewed((current) => !current);
    setIsFocused(text);
  }

  function handleViewClose() {
    setIsViewed((current) => !current);
  }

  function handleClose() {
    onClose();
  }
  return (
    <div className="container-5">
      <div className="header-section-2">
        <h2>Submitted Work</h2>
      </div>
      <div className="list-section-2">
        {isViewed && (
          <div className="view-section">
            <h3>{isFocused}</h3>
            <button onClick={handleViewClose} className="return-3">
              <BiArrowBack />
            </button>
          </div>
        )}
        <ul className="list">
          {submissions.map((submission) => (
            <div className="list-item-2" key={submission._id}>
              <h3>{submission.text}</h3>
              <button
                onClick={() => handleView(submission.text)}
                className="view-2"
              >
                <BsEyeglasses />
              </button>
            </div>
          ))}
        </ul>
        <button onClick={handleClose} className="return-2">
          <BiArrowBack />
        </button>
      </div>
    </div>
  );
}

export default Submitted;
