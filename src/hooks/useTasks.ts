import { useEffect, useState } from "react";
import type { Task } from "../types/task";
import { loadTasks, saveTasks } from "../utils/storage";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      status: "pending",
      createdAt: Date.now(),
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
  };

  const updateTask = (id: string, newTitle: string) => {
    if (!newTitle.trim()) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle.trim() } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, updateTask, deleteTask };
};
