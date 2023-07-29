import { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import './Editor.css';
import { BsKeyboard, BsKeyboardFill } from 'react-icons/bs';

function Editor() {
  const modules = {
    toolbar: [['bold', 'italic', 'underline']],
  };
  const { quill, quillRef } = useQuill({ modules });
  const [value, setValue] = useState();
  const [dataLength, setDataLength] = useState(0);
  const [typeSound, setTypeSound] = useState(false);

  function handleTypewriter() {
  setTypeSound((current) => !current);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        setValue(quillRef.current.firstChild.innerHTML);
        const data = quillRef.current.firstChild.innerHTML;
        const length = quill.getLength() - 1;
        setDataLength(length);
        const dataStringified = JSON.stringify(data);
        if (length > 5000) {
          quill.deleteText(5000, quill.getLength());
        }
      });

      function handleType(event) {
        if (typeSound) {
          if (event.key === 'Enter') {
            dingSound();
          } else if (event.key === 'Backspace' || event.key === 'Shift' | event.key === 'Control') {
            return;
          } else {
            keySound();
          }
        }
      }
      document.addEventListener('keydown', handleType);

      return () => {
        document.removeEventListener('keydown', handleType);
      };
      function dingSound() {
        const ding = new Audio('typewriter-ding.wav');
        ding.play();
      }

      function keySound() {
        const key = new Audio('typewriter-key.wav');
        key.play();
      }
    }
  }, [quill, typeSound]);
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
            {typeSound ? <BsKeyboardFill/> : <BsKeyboard />}
          </button>
          <h3>Characters: {dataLength} / 5000</h3>
        </div>
      </div>
    </>
  );
}

export default Editor;
