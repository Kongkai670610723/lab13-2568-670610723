import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { type TaskItemProps,type TaskProps } from "../libs/Task";

// ฟังก์ชันช่วยสำหรับ Local Storage
const TASKS_KEY = "tasks";

function loadTasks(): TaskProps[] {
  const data = localStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveTasks(tasks: TaskProps[]) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export const useTaskStore = create<TaskItemProps>((set, get) => ({
  tasks: loadTasks(), // โหลดจาก Local Storage ตอนเริ่มต้น
  setTasks: (tasks) => {
    saveTasks(tasks);
    set({ tasks });
  },
  addTask: (title, description, dueDate, assignees) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      dueDate,
      assignees,
      isDone: false,
      doneAt: null,
    };
    const updatedTasks = [newTask, ...get().tasks];
    saveTasks(updatedTasks);
    set({ tasks: updatedTasks });
  },
  toggleTask: (id) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isDone: !task.isDone,
            doneAt: task.isDone ? null : new Date().toLocaleDateString(),
          }
        : task
    );
    saveTasks(updatedTasks);
    set({ tasks: updatedTasks });
  },
  removeTask: (id) => {
    const updatedTasks = get().tasks.filter((task) => task.id !== id);
    saveTasks(updatedTasks);
    set({ tasks: updatedTasks });
  },
}));