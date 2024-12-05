import React, { useState } from 'react';

function EditToDoForm({ todo, saveEditedTodo, cancelEditing }) {
  const [newTask, setNewTask] = useState(todo.task);

  const handleSave = () => {
    saveEditedTodo(todo.id, newTask);
  };

  return (
    <div className="edit-todo-form">
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={cancelEditing}>Cancel</button>
    </div>
  );
}

export default EditToDoForm;
