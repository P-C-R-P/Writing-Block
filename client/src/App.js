import './App.css';

function App() {
  return (
    <div className="container-2">
      <div className="prompt-section">
        <button id="back-arrow"></button>
        <div className="prompt-area">
          <div className="prompt">
            <button id="save"></button>
            <h2>Prompt text goes here.</h2>
            <button id="choose"></button>
          </div>
        </div>
        <button id="forward-arrow"></button>
      </div>
      <div className="text-section">
        <div className="text-area">
          <div className="text-buttons">
            <button id="bold"></button>
            <button id="italics"></button>
            <button id="underline"></button>
          </div>
          <textarea></textarea>
          <div className="words">
            <h3>Word count: 0 / 2500</h3>
          </div>
        </div>
        <div className="options-section">
          <button></button>
          <div className="options">
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
    // <div className="container-1">
    //   <div className="block-section">
    //     <div className="block submissions">
    //       <h2>View submitted stories</h2>
    //     </div>
    //     <div className="block">
    //       <h2>Generate a first sentence</h2>
    //     </div>
    //     <div className="block">
    //       <h2>Generate a story idea</h2>
    //     </div>
    //     <div className="block">
    //       <h2>View poetry flashcards</h2>
    //     </div>
    //     <div className="block">
    //       <h2>View quotation flashcards</h2>
    //     </div>
    //     <div className="block prompts">
    //       <h2>View saved prompts</h2>
    //     </div>
    //   </div>
    //   <div className="side-menu-section">
    //     <h2>View submitted stories</h2>
    //   </div>
    // </div>
  );
}

export default App;
