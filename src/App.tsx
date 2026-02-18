import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, addTask, toggleTask, deleteTask, updateTask } = useTasks();

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  );
}

export default App;
