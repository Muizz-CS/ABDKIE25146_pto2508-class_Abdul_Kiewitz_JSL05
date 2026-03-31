export const taskManager = {

  createNewTask(data) {
    return {
      id: Date.now(),
      title: data.title,
      description: data.description,
      status: data.status,
      board: "Launch Career"
    };
  }
};