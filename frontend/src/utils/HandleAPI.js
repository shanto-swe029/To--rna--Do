import axios from "axios";

const baseURL = "http://localhost:5000";

const getAllTodo = (setTodo) => {
  axios.get(baseURL).then(({ data }) => {
    console.log(`data ---> `, data);
    setTodo(data);
  });
};

export { getAllTodo };
