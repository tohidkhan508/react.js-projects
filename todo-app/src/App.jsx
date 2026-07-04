import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isEditIndex, setIsEditIndex] = useState(null);

  const handleAdd = () => {
    if (!input.trim()) return;

    if (isEdit) {
      const updateTodos = [...todos];
      updateTodos[isEditIndex] = input;

      setTodos(updateTodos);
      setIsEditIndex(null);
      setIsEdit(false);
      setInput("");
    } else {
      setTodos([...todos, input]);
    }
    setInput("");
  };

  const handleEdit = (index) => {
    setInput(todos[index]);
    setIsEditIndex(index);
    setIsEdit(true);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <section className="min-h-screen bg-gray-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-96 p-3 shadow-2xl max-h-[80vh] overflow-auto hide-scrollbar">
        <div className="sticky top-0 bg-white z-10 pb-3">
          <h2 className="text-center font-bold text-2xl">Todo App</h2>
          <div className="flex justify-between gap-2 mt-4">
            <input
              type="text"
              placeholder="Add a new todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border border-gray-400 w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded text-gray-900 font-semibold"
            />
            <button
              onClick={handleAdd}
              className="bg-blue-500 px-3 rounded-lg font-semibold text-white cursor-pointer py-2 hover:bg-blue-700"
            >
              {isEdit ? "Update" : "Add"}
            </button>
          </div>
        </div>
        <ul className="mt-4 grid gap-3">
          {todos.map((todo, i) => (
            <li
              key={i}
              className="bg-gray-300 flex justify-between px-3 py-2 rounded-lg"
            >
              <span className="text-center flex justify-center">{todo}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(i)}
                  className="bg-green-500 px-3 py-1 rounded-lg font-semibold text-white text-md cursor-pointer hover:bg-green-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(i)}
                  className="bg-red-500 px-3 py-1 rounded-lg font-semibold text-white text-md cursor-pointer hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default App;
