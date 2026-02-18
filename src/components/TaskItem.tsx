import { memo, useState, type KeyboardEvent } from "react";

import { TaskStatus, type Task } from "../types/task";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}

/**
 * TaskItem component
 * @param task - task to display
 * @param onToggle - function to toggle a task
 * @param onDelete - function to delete a task
 * @param onUpdate - function to update a task
 * @returns TaskItem component
 */
export const TaskItem = memo(
  ({ task, onToggle, onDelete, onUpdate }: Props) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editValue, setEditValue] = useState<string>(task.title);

    const handleSave = (): void => {
      onUpdate(task.id, editValue);
      setIsEditing(false);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === "Enter") handleSave();
      if (event.key === "Escape") {
        setEditValue(task.title);
        setIsEditing(false);
      }
    };

    return (
      <div className="task-item">
        <div className="task-content">
          <input
            type="checkbox"
            checked={task.status === TaskStatus.COMPLETED}
            onChange={() => onToggle(task.id)}
            aria-label={`Mark ${task.title} as completed`}
          />
          {isEditing ? (
            <input
              value={editValue}
              onChange={(event) => setEditValue(event.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <span
              className={
                task.status === TaskStatus.COMPLETED ? TaskStatus.COMPLETED : ""
              }
            >
              {task.title}
            </span>
          )}
        </div>
        <div className="actions">
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              aria-label={`Edit ${task.title}`}
            >
              Edit
            </button>
          )}
          <button
            onClick={() => onDelete(task.id)}
            aria-label={`Delete ${task.title}`}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
);
