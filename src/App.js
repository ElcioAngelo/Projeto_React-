import './App.css';
import './components/card';
import Timer from './components/Timer';

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
            <p className="sevenine">$7.99 per serving</p>
          </div>
          <div className="secondParagraph">
          With high-quality ingredients packed into every box, these delicious recipes deliver on value. If you do the math, making these recipes is cheaper with us than doing it on your own.
          </div>
          <button className="Blue_button2">View Plans</button>
          <div className="card">
              <img className="image_container" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfdUZorHRLYjEykesNTt_zE3Xq5PVsn4c3A&s" alt="Psy"></img>
              <div className="container">
                  <h3>Card Title</h3>
                  <p>Secondary Text</p>
              </div>
          </div>
          <Timer></Timer>       
        </div>
      
      </div>
  );
}

export default App;
