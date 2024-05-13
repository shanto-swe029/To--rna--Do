import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>TODO APP</h1>
        <div className="top">
          <input type="text" placeholder="type here" />
          <div className="add">Add</div>
        </div>
        <div className="list">
          <Todo text="buy shirt" />
          <Todo text="pay bill"/>
          <Todo text="shop from local store"/>
        </div>
      </div>
    </div>
  );
}

export default App;
