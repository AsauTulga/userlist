import { useState } from "react";
import "./App.css";

type User = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Али" },
    { id: 2, name: "Мария" },
    { id: 3, name: "Иван" },
  ]);

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>Список пользователей</h1>

      {users.length === 0 ? (
        <p>Пользователей нет</p>
      ) : (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <span>{user.name}</span>

              <button onClick={() => deleteUser(user.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
