import axios from "axios";

const baseURL = "https://mern-todo-lb8i.onrender.com";

const getAllTodo = (setTodo) => {
  axios.get(baseURL).then(({ data }) => {
    console.log(`data ---> `, data);
    setTodo(data);
  });
};

const addTodo = (text, setText, setTodo) => {
  axios
    .post(`${baseURL}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateTodo = (todoId, text, setTodo, setText, setIsUpdating) => {
  axios
    .post(`${baseURL}/update`, { _id: todoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (todoId, setTodo) => {
  axios
    .post(`${baseURL}/delete`, { _id: todoId })
    .then((data) => {
      console.log(data);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
