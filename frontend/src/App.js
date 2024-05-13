import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { getAllTodo } from "./utils/HandleAPI";

function App() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>TODO APP</h1>
        <div className="top">
          <input type="text" placeholder="type here" />
          <div className="add">Add</div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo key={item._id} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
