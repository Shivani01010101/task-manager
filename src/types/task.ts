export enum TaskStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
}

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: number;
}
