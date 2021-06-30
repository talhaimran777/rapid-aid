import { LOAD_TASKS, LOAD_TASKS_SUCCESS, ZERO_TASKS } from './actionTypes';

export const loadTasks = () => {
  return { type: LOAD_TASKS };
};

export const loadTasksSuccess = (tasks) => {
  return { type: LOAD_TASKS_SUCCESS, payload: tasks };
};

export const zeroTasks = () => {
  return { type: ZERO_TASKS, payload: [] };
};
