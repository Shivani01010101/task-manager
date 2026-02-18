import { useState } from "react";
import type { Task } from "../types/task";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}

export const TaskItem = ({ task, onToggle, onDelete, onUpdate }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleSave = () => {
    onUpdate(task.id, editValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setEditValue(task.title);
      setIsEditing(false);
    }
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span
          onClick={() => onToggle(task.id)}
          className={task.status === "completed" ? "completed" : ""}
        >
          {task.title}
        </span>
      )}

      <div className="actions">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};
