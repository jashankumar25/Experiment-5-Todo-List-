const initialState = {
  tasks: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title: action.payload,
            status: "pending"
          }
        ]
      };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        )
      };

    case "TOGGLE_STATUS":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                status:
                  task.status === "pending"
                    ? "done"
                    : "pending"
              }
            : task
        )
      };

    default:
      return state;
  }
};