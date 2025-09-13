//Task.ts
interface TaskProps {
  id: string;
  title: string;
  description: string;
  dueDate: string | null;
  assignees:string[]; //------
  isDone: boolean;
  doneAt: string | null;
}
export type { TaskProps }

interface TaskItemProps {
  tasks: TaskProps[];
  setTasks: (tasks: TaskProps[]) => void;
  addTask: (
    title: string,
    description: string,
    dueDate: string | null,
    assignees:string[]
  ) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}
export type { TaskItemProps }

interface TaskFormState {
  title: string,
  description: string,
  dueDate: string | null,
  assignees:string[], //-----
  setTasks: (title: string) => void;
  setdescription: (description: string) => void;
  setdueDate: (dueDate: string | null) => void;
  setAssignees:(assignees: string[]) => void; //-------
  resetForm: () => void;
}
export type { TaskFormState }