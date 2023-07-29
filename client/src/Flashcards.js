import './Flashcards.css';

function Flashcards({ onClose }) {
  function handleClose() {
    onClose();
  }
  return (
    <div className="container-3">
      <div className="flashcard-section">
        <button className="back-arrow"></button>
        <div className="flashcard">
          <button className="save"></button>
          <h2>Flashcards contents</h2>
          <button className="choose"></button>
        </div>
        <div className="flashcard tilted-card"></div>
        <button className="forward-arrow"></button>
        <button onClick={handleClose} className="return"></button>
      </div>
    </div>
  );
}

export default Flashcards;
