const initiqlState = {
  task: "",
  isDel: false,
};

const Tasks = (state = initiqlState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "READ":
      return { task, isDel };
    case "CREATE":
      return { task, isDel: false };
    case "UPDATE":
      const { task, isDel } = payload;
        return { task, isDel };
      case "DELETE":
          return{task,isDel:true}

          default:
              return state;

  }
};
