import './Saved.css';
import { useState } from 'react';

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
  function handleClose() {
    onClose();
  }
  return (
    <div className="container-4">
      <div className="header-section-1">
        <h2>Saved Prompts</h2>
      </div>
      <div className="list-section-1">
        <div className="list-item-1">
          <button
            onMouseEnter={() => setBinHover(true)}
            onMouseLeave={() => setBinHover(false)}
            className="delete-1"
          >
            {binHovered ? <BsTrash2Fill /> : <BsTrash2 />}
          </button>
          <h3>This element is one of the prompts.</h3>
          <button className="use-1">
            <BsCheckLg />
          </button>
        </div>
        <button onClick={handleClose} className="return-1">
          <BiArrowBack />
        </button>
        {/* <div className="list-item-1">
          <button className="delete-1"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="use-1"></button>
        </div>
        <div className="list-item-1">
          <button className="delete-1"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="use-1"></button>
        </div>
        <div className="list-item-1">
          <button className="delete-1"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="use-1"></button>
        </div>
        <div className="list-item-1">
          <button className="delete-1"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="use-1"></button>
        </div> */}
      </div>
    </div>
  );
}

export default Saved;
