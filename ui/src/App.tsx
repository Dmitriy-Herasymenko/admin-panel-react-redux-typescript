import React from 'react';
import { UserList } from "./components/userList";
import { TodoList } from "./components/todoList";

function App() {
  return (
    <div className="App">
        <UserList />
        <TodoList />
    </div>
  );
}

export default App;
