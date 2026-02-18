import type { Task } from "../types/task";

const TASKS_KEY = "task_manager_tasks";

/**
 * Load tasks from local storage
 * @returns tasks
 */
export const loadTasks = (): Task[] => {
  try {
    const data = localStorage.getItem(TASKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

/**
 * Save tasks to local storage
 * @param tasks - tasks to save
 */
export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};
