import type { Task } from "../types/task";

const TASKS_KEY = "task_manager_tasks";

export const loadTasks = (): Task[] => {
  try {
    const data = localStorage.getItem(TASKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveTasks = (tasks: Task[]) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};
