import { create } from "zustand";
import { type TaskFormState } from "../libs/Task";

export const useTaskFormStore = create<TaskFormState>((set) => ({
  title: "",
  description: "",
  dueDate: "",
  assignees: [],
  setTasks: (title) =>
    set(() => ({
      title: title,
    })),
  setdescription: (description) =>
    set(() => ({
      description: description,
    })),
  setdueDate: (dueDate) =>
    set(() => ({
      dueDate: dueDate,
    })),
  setAssignees: (assignees) => //---------
    set(() => ({
      assignees: assignees,
    })),
  resetForm: () =>
    set({
      title: "",
      description: "",
      dueDate: "",
      assignees: [],
    }),
}));