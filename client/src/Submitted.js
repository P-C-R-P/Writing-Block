import './Submitted.css';

function Submitted() {
  return (
    <div className="container-5">
      <div className="header-section">
        <h2>Submitted Work</h2>
        <div className="filter-options">
          <ul>
            <div href="#sci-fi">Sci-fi</div>
            <div href="mystery">Mystery</div>
            <div href="historical">Historical</div>
            <div href="horror">Horror</div>
            <div href="#fantasy">Fantasy</div>
            <div href="#thriller">Thriller</div>
            <div href="#romance">Romance</div>
            <div href="#poetry">Poetry</div>
          </ul>
        </div>
      </div>
      <div className="list-section">
        <div className="list-item">
          <button className="like"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="view"></button>
        </div>
        <button className="return"></button>
        {/* <div className="list-item">
          <button className="like"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="view"></button>
        </div>
        <div className="list-item">
          <button className="like"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="view"></button>
        </div>
        <div className="list-item">
          <button className="like"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="view"></button>
        </div>
        <div className="list-item">
          <button className="like"></button>
          <h3>This element is one of the prompts.</h3>
          <button className="view"></button>
        </div> */}
      </div>
    </div>
  );
}

export default Submitted;
