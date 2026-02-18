import { useEffect, useState } from "react";

import { TaskStatus, type Task } from "../types/task";
import { loadTasks, saveTasks } from "../utils/storage";

/**
 * useTasks hook
 * @returns useTasks hook
 */
export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  /**
   * Save tasks to local storage
   * @param tasks - tasks to save
   */
  useEffect((): void => {
    saveTasks(tasks);
  }, [tasks]);

  /**
   * Add a new task
   * @param title - title of the task
   */
  const addTask = (title: string): void => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      status: TaskStatus.PENDING,
      createdAt: Date.now(),
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  /**
   * Toggle a task
   * @param id - id of the task
   */
  const toggleTask = (id: string): void => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === TaskStatus.PENDING
                  ? TaskStatus.COMPLETED
                  : TaskStatus.PENDING,
            }
          : task
      )
    );
  };

  /**
   * Update a task
   * @param id - id of the task
   * @param newTitle - new title of the task
   */
  const updateTask = (id: string, newTitle: string): void => {
    if (!newTitle.trim()) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle.trim() } : task
      )
    );
  };

  /**
   * Delete a task
   * @param id - id of the task
   */
  const deleteTask = (id: string): void => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, updateTask, deleteTask };
};
