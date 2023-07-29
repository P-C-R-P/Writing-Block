import './Prompts.css';
import { BiArrowBack, BiExport } from 'react-icons/bi';
import { useState } from 'react';
import {
  BsBookmark,
  BsBookmarkFill,
  BsCheckLg,
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsArrowClockwise,
  BsArrowCounterclockwise,
} from 'react-icons/bs';
import Editor from './Editor';

function Prompts({ onClose }) {
  const [hasBookmark, setHasBookmark] = useState(false);

  function handleSave() {
    setHasBookmark((current) => !current);
  }
  function handleClose() {
    onClose();
  }
  return (
    <div className="container-2">
      <div className="prompt-section">
        <button>
          <BsArrowCounterclockwise className="back-arrow" />
        </button>
        <div className="prompt-area">
          <div className="prompt">
            <button onClick={handleSave} className="save-1">
              {hasBookmark ? <BsBookmarkFill /> : <BsBookmark />}
            </button>
            <h2>Prompt text goes here.</h2>
            <button className="choose-1">
              <BsCheckLg />
            </button>
          </div>
        </div>
        <button>
          <BsArrowClockwise className="forward-arrow" />
        </button>
      </div>
      <div className="text-section">
        <div className="text-area">
          {/* <div className="text-buttons">
            <button className="bold">
              <BsTypeBold className="bold" />
            </button>
            <button>
              <BsTypeItalic className="italics" />
            </button>
            <button className="underline">
              <BsTypeUnderline />
            </button>
          </div> */}
          <Editor />
          {/* <textarea maxlength="5000"></textarea> */}
        </div>
        <div className="options-section">
          <button onClick={handleClose}>
            <BiArrowBack className="return" />
          </button>
          <div className="options">
            <button>
              <BsCheckLg className="submit" />
            </button>
            <button>
              <BiExport className="export" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prompts;
