import './Submitted.css';
import { BsHeartFill, BsHeart, BsEyeglasses } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { useState } from 'react';

function Submitted({ onClose }) {

  const [isLoved, setIsLoved] = useState(false);

  function handleLove() {
    setIsLoved((current) => !current);
  }
  function handleClose() {
    onClose();
  }
  return (
    <div className="container-5">
      <div className="header-section-2">
        <h2>Submitted Work</h2>
        <div className="filter-options-2">
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
        </div>
      </div>
      <div className="list-section-2">
        <div className="list-item-2">
          <button onClick={handleLove} className="like-2">
            {isLoved ? <BsHeartFill /> : <BsHeart />}
          </button>
          <h3>This element is one of the submissions.</h3>
          <button className="view-2">
            <BsEyeglasses />
          </button>
        </div>
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
