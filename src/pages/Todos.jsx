import { useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'ev topla', completed: false, edit: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [newId, setNewId] = useState(2);
  const [editTodoInput, setEditTodoInput] = useState('');

  function addTodo() {
    const newTodoItem = {
      id: giveId(),
      title: newTodo,
      completed: false,
      edit: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  }

  function giveId() {
    setNewId(newId + 1);
    return newId;
  }

  function toggleTodo(todoId) {
    setTodos(
      todos.map((x) => (x.id == todoId ? { ...x, completed: !x.completed } : x))
    );
  }

  function deleteTodo(todoId) {
    const updateTodos = todos.filter((x) => x.id !== todoId);
    setTodos(updateTodos);
  }

  function saveEditTodo(todoId) {
    const updateTodos = todos.map((todo) =>
      todo.id == todoId ? { ...todo, title: editTodoInput, edit: false } : todo
    );
    setTodos(updateTodos);
  }

  function editTodo(todoId) {
    const updateTodos = todos.map((todo) =>
      todo.id == todoId ? { ...todo, edit: true } : todo
    );
    setTodos(updateTodos);
  }
  console.log(todos);
  return (
    <div>
      <input
        type='text'
        placeholder='Todo Gir'
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.edit ? (
              <input
                type='text'
                placeholder='new'
                onChange={(e) => setEditTodoInput(e.target.value)}
              />
            ) : (
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.title}
              </span>
            )}

            <button
              style={{ marginLeft: '10px' }}
              onClick={() => deleteTodo(todo.id)}
            >
              Sil
            </button>
            {todo.edit ? (
              <button onClick={() => saveEditTodo(todo.id)}>Kaydet</button>
            ) : (
              <button onClick={() => editTodo(todo.id)}>Düzenle</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
