import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import './Editor.css';
import { BsKeyboard, BsKeyboardFill, BsCheckLg } from 'react-icons/bs';
import { BiExport } from 'react-icons/bi';

function Editor() {
  const modules = {
    toolbar: [['bold', 'italic', 'underline']],
  };
  const { quill, quillRef } = useQuill({ modules });
  const [value, setValue] = useState();
  const [dataLength, setDataLength] = useState(0);
  const [typeSound, setTypeSound] = useState(false);

  function handleSubmit() {
    try {
      const div = document.createElement('div');
      div.innerHTML = value;
      const content = div.textContent;
      fetch('http://localhost:3001/submissions', {
        method: 'POST',
        body: JSON.stringify({
          title: 'My Story',
          text: content
        }),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => response.json());
      alert('Submission successful!')
    } catch (error) {
      console.log(error);
    }
  }

  function handleTypewriter() {
    setTypeSound((current) => !current);
  }

  function handleType(event) {
    if (typeSound) {
      if (event.key === 'Enter') {
        dingSound();
      } else if (
        event.key === 'Backspace' ||
        (event.key === 'Shift') | (event.key === 'Control')
      ) {
        return;
      } else {
        keySound();
      }
    }
  }

  function dingSound() {
    const ding = new Audio('typewriter-ding.wav');
    ding.play();
  }

  function keySound() {
    const key = new Audio('typewriter-key.wav');
    key.play();
  }

  function handleExport() {
    const div = document.createElement('div');
    div.innerHTML = value;
    const content = div.textContent;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'writing-block-export.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        setValue(quillRef.current.firstChild.innerHTML);
        const length = quill.getLength() - 1;
        setDataLength(length);
        if (length > 5000) {
          quill.deleteText(5000, quill.getLength());
        }
      });

      document.addEventListener('keydown', handleType);

      return () => {
        document.removeEventListener('keydown', handleType);
      };
    }
  }, [quill, typeSound, handleType, quillRef]);
  return (
    <>
      <div>
        <div
          style={{
            width: '100%',
            height: '45vh',
            'border-style': 'none',
          }}
        >
          <div scrollableContainer="true" ref={quillRef}></div>
        </div>
        <div className="words">
          <button onClick={handleTypewriter} className="typewriter">
            {typeSound ? <BsKeyboardFill /> : <BsKeyboard />}
          </button>
          <h3>{dataLength} / 5000</h3>
        </div>
      </div>
      <div className="options-section">
        <div className="options">
          <button onClick={handleSubmit}>
            <BsCheckLg className="submit" />
          </button>
          <button onClick={handleExport}>
            <BiExport className="export" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Editor;
