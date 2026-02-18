import { useState, type SubmitEvent } from "react";

interface Props {
  onAdd: (title: string) => void;
}

/**
 * TaskForm component
 * @param onAdd - function to add a new task
 * @returns TaskForm component
 */
export const TaskForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
