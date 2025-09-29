import React, {useState} from 'react';

function HomePage() {
    const [list, setList] = useState([]);
    const [text, setText] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        setList([...list, text]);
    };    
    
    return (
        <div>
            <h1>Welcome to the home page</h1>
            <p>ToDo List</p>
        
            <form onSubmit={onSubmit}>
                <input 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add Task"
                ></input>
                <button type="submit">Add</button>
            </form>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>        
    );
}

export default HomePage;