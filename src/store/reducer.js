//import ADD_TODOS from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODOS": {
      var obj = {
        todos: [...state.todos, payload]
      };
      console.log(obj);
      return obj;
    }
    case "EDIT_TODOS": {
      return {
        todos: state.todos.map((s) => {
          if (s.id === payload.id) {
            s.name = payload.name;
            return s;
          }
          return s;
        })
      };
    }
    case "DELETE_TODOS": {
      return { todos: state.todos.filter((s) => s.id !== payload.id) };
    }
    case "COMPLETED_TODOS": {
      //console.log("jhlkjh", [state.todos]);
      return {
        completed: payload
      };
    }
    case "CHECKED_TODOS": {
      return {
        todos: state.todos.map((s) => {
          if (s.id === payload.id) {
            s.status = payload.status;
          }
          return s;
        })
      };
    }
    default: {
      return state;
    }
  }
};
