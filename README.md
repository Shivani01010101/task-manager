Task Manager

A production-ready Task Manager application built with React + TypeScript, implementing clean architecture, accessibility improvements, and performance optimizations.

🔗 Live Demo
https://task-manager-lyart-seven.vercel.app/

📦 GitHub Repository
https://github.com/Shivani01010101/task-manager

Features -
Create tasks
Edit task title
Toggle task completion status
Delete tasks
Persistent storage using localStorage
Accessible UI with ARIA enhancements
Performance optimizations using memoization

Tech Stack -
React (Vite)
TypeScript
CSS (modular structure)
LocalStorage API

Architecture Decisions -

1. Separation of Concerns
   The application is structured with:

components/
hooks/
types/
utils/

2. State Management

React hooks were used for state handling.
Core logic such as add, update, toggle, and delete operations are handled inside useTasks to keep UI components declarative.

3. Performance Optimizations

React.memo used to prevent unnecessary re-renders of task items.
Derived state used instead of redundant state storage.

4. Accessibility Enhancements

Semantic HTML (ul, li)
ARIA labels for action buttons
aria-live region for dynamic updates
Proper button roles and keyboard support
Clear interactive affordances (checkbox for toggle)

5. Persistence Strategy

Tasks are persisted using localStorage.
This was chosen for:
Simplicity within time constraints
No backend requirement
Immediate persistence without API setup
Storage keys are centralized to avoid hardcoded values.

Trade-offs -
No backend integration (requirement did not specify one)
No drag-and-drop or advanced sorting (kept scope aligned with time limit)
Styling kept minimal but clean and intentional

Setup Instructions -

Clone the repository:

git clone https://github.com/Shivani01010101/task-manager.git
cd task-manager
npm install
npm run dev

To build production:

npm run build
npm run preview
