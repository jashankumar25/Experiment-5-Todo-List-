import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAdd = () => {
    dispatch({ type: "ADD_TASK", payload: title });
    setTitle("");
  };

  return (
    <div>
      <h2>Basic Redux Todo</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() =>
                dispatch({
                  type: "TOGGLE_STATUS",
                  payload: task.id
                })
              }
              style={{
                textDecoration:
                  task.status === "done"
                    ? "line-through"
                    : "none"
              }}
            >
              {task.title} ({task.status})
            </span>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_TASK",
                  payload: task.id
                })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;