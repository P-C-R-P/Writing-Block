import './Submitted.css';
import { BsHeartFill, BsHeart, BsEyeglasses } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';

function Submitted({ onClose }) {
  const [submissions, setSubmissions] = useState([]);
  const [isLoved, setIsLoved] = useState(false);
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
        {/* <div className="filter-options-2">
          <ul>
            <div href="#sci-fi">Sci-fi</div>
            <div href="#mystery">Mystery</div>
            <div href="#historical">Historical</div>
            <div href="#horror">Horror</div>
            <div href="#fantasy">Fantasy</div>
            <div href="#thriller">Thriller</div>
            <div href="#romance">Romance</div>
            <div href="#poetry">Poetry</div>
          </ul>
        </div> */}
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
              {/* <button onClick={handleLove} className="like-2">
            {isLoved ? <BsHeartFill /> : <BsHeart />}
          </button> */}
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
        {/* <div className="list-item-2">
          <button className="like-2"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="view-2"></button>
        </div>
        <div className="list-item-2">
          <button className="like-2"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="view-2"></button>
        </div>
        <div className="list-item-2">
          <button className="like-2"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="view-2"></button>
        </div>
        <div className="list-item-2">
          <button className="like-2"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="view-2"></button>
        </div> */}
      </div>
    </div>
  );
}

export default Submitted;
