import './Saved.css';

function Saved() {
  return (
    <div className="container-4">
      <div className="header-section">
        <h2>Saved Prompts</h2>
      </div>
      <div className="list-section">
        <div className="list-item">
          <button className="delete"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="use"></button>
        </div>
        <button className="return"></button>
        {/* <div className="list-item">
          <button className="delete"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="use"></button>
        </div>
        <div className="list-item">
          <button className="delete"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="use"></button>
        </div>
        <div className="list-item">
          <button className="delete"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="use"></button>
        </div>
        <div className="list-item">
          <button className="delete"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="use"></button>
        </div> */}
      </div>
    </div>
  );
}

export default Saved;
