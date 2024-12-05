import React, { useState } from 'react';

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter your task...."
        value={value}
      />
      <button className="todo-btn" type="submit">Add Task</button>
    </form>
  );
}

export default ToDoForm;
