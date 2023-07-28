import './Prompts.css';

function Prompts() {
  return (
    <div className="container-2">
      <div className="prompt-section">
        <button className="back-arrow"></button>
        <div className="prompt-area">
          <div className="prompt">
            <button className="save"></button>
            <h2>Prompt text goes here.</h2>
            <button className="choose"></button>
          </div>
        </div>
        <button className="forward-arrow"></button>
      </div>
      <div className="text-section">
        <div className="text-area">
          <div className="text-buttons">
            <button className="bold"></button>
            <button className="italics"></button>
            <button className="underline"></button>
          </div>
          <textarea maxlength="5000"></textarea>
          <div className="words">
            <h3>Character count: 0 / 5000</h3>
          </div>
        </div>
        <div className="options-section">
          <button className="return"></button>
          <div className="options">
            <button className="submit"></button>
            <button className="export"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prompts;
