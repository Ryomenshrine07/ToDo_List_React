import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';
import EditToDoForm from './EditToDoForm';

function ToDoWrapper() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const startEditing = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setEditingTodo(todo);
  };

  const saveEditedTodo = (id, newTask) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo));
    setEditingTodo(null);
  };

  const cancelEditing = () => {
    setEditingTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="TodoWrapper">
      <ToDoForm addTodo={addTodo} />
      {editingTodo ? (
        <EditToDoForm
          todo={editingTodo}
          saveEditedTodo={saveEditedTodo}
          cancelEditing={cancelEditing}
        />
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <div style={{backgroundColor:'#8758ff',color:'white',width:'fit-content',padding:'0.4em'}} key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <span style={{margin:'1em',fontSize:'2em'}} onClick={() => toggleCompletion(todo.id)}>{todo.task}</span>
              <button style={{margin:'1em',fontSize:'1.3em',letterSpacing:'4px',backgroundColor:'yellow'}} onClick={() => startEditing(todo.id)}>Edit</button>
              <button style={{margin:'1em',fontSize:'1.3em',letterSpacing:'4px',backgroundColor:'yellow'}} onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ToDoWrapper;
