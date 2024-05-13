import axios from "axios";

const baseURL = "http://localhost:5000";

const getAllTodo = (setTodo) => {
  axios.get(baseURL).then(({ data }) => {
    console.log(`data ---> `, data);
    setTodo(data);
  });
};

const addTodo = (text, setText, setTodo) => {
  axios.post(`${baseURL}/save`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllTodo(setTodo);
  });
};

export { getAllTodo, addTodo };
