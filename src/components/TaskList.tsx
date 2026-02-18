import type { Task } from "../types/task";
import { TaskItem } from "./TaskItem";

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}

export const TaskList = ({ tasks, onToggle, onDelete, onUpdate }: Props) => {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one!</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};
