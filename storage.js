export const storage = {

  getTasks(fallbackData) {
    const tasks = localStorage.getItem('tasks');
    if (!tasks) {
      this.saveTasks(fallbackData);
      return fallbackData;
    }
    return JSON.parse(tasks);
  },

  saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};