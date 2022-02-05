import "./App.css";
import { useState } from "react";
function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");
  function addToDo(e) {
    setTodo([...todos, input]);
    e.preventDefault();
    setInput("");
  }
  return (
    <div className="App">
      <form action="">
        <div class="input-container">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <label for="name ">Name</label>
        </div>

        <div class="input-container">
          <button type="submit" onClick={addToDo}>
            Add
          </button>
        </div>

        <div class="input-container ">
          {todos.map((todo) => (
            <h2>{todo}</h2>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
