import React, {useState} from 'react'; //didnt mention to do this
import './App.css';
import FilmList from './components/filmList';

function App(props) {
  const[list, setList] = useState(["ready", "set", "GO"]);
  const[text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
  };

  return (
    <div>
      <h1>HelloWorld</h1>
      <form onSubmit={onSubmit}> {/*can just add prop here*/}
        <input 
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <FilmList/>
    </div>
  );
}


export default App;
