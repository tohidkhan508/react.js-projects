import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = (index) => {
    if (!input.trim()) return;

    if (isEdit) {
      const updateTodos = [...todos];
      updateTodos[editIndex] = input;

      setTodos(updateTodos);
      setInput("");
      setIsEdit(false);
      setEditIndex(null);
    } else {
      setTodos([input, ...todos]);
    }
    setInput("");
  };

  const handleEdit = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
    setIsEdit(true);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <section className="h-screen flex justify-center items-center bg-gray-300">
      <div className="bg-white p-6 min-w-sm rounded-lg shadow-2xl">
        <h2 className="text-center text-2xl font-bold">Todo App</h2>
        <div className="flex justify-between gap-2 mt-4">
          <input
            type="text"
            placeholder="Add a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 px-3 py-2 focus:outline-none w-full focus:ring-2 focus:ring-blue-500 rounded"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 px-3 py-2 rounded-lg text-white font-semibold cursor-pointer hover:bg-blue-700"
          >
            {!isEdit ? "Add" : "Update"}
          </button>
        </div>
        <ul className="">
          {todos.map((todo, i) => (
            <li
              key={i}
              className="p-2 px-3 py-3 flex justify-between bg-gray-300 mt-4 rounded-lg"
            >
              <span className="font-bold">{todo}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(i)}
                  className="bg-green-400 px-3 py-1 rounded-lg font-semibold text-white text-lg cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(i)}
                  className="bg-red-400 px-3 py-1 rounded-lg font-semibold text-lg text-white cursor-pointer"
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
