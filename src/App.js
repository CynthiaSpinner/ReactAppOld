import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>React is so cool!</h1>
          <p>react is really cool</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <ul>
              <li>this</li>
              <li> is cool</li>
              <li> done this before</li>
            </ul>
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
