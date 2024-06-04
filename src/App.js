import './App.css';
import './components/card';

function App() {
  return (
    <div className="App">

      <div className="Header">
          <div className="Title">
            <p>Blue Apron</p>
          </div>
          <div className="Subtitle">
            <p>A GREAT MEAL</p>
          </div>
          <div className="Changed">
            <p>changes everything</p>
          </div>
          <div className="Paragraph">
          <p>Choose from 80+ weekly meals with high-quality ingredients and options for every lifestyle, including vegetarian, carb-conscious, Heat & Eat, and more.</p>
          </div>
          <button className="Blue_button">View Plans</button>
      </div>
      <div className="embaixo">
          <div className="Title_embaixo">
            <p>Get started as little as</p>
          </div>
          <div>
            <p>$7.99 per serving</p>
          </div>
          <div className="card">
              <img className="image_container" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfdUZorHRLYjEykesNTt_zE3Xq5PVsn4c3A&s" alt="Psy"></img>
              <div className="container">
                  <h3>Card Title</h3>
                  <p>Secondary Text</p>
              </div>
          </div>          
        </div>
      
      </div>
  );
}

export default App;
