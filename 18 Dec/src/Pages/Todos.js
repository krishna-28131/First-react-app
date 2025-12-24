import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="page">
      <h2>Todos</h2>
      <button onClick={logout}>Logout</button>

      <div className="todo-list">
        {todos.map((todo) => (
          <Link key={todo.id} to={`/todos/${todo.id}`} className="todo-card">
            <p>{todo.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Todos;

