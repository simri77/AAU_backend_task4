import Task from '../models/task.js';

export const createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

export const getAllTasks = async () => {
  return await Task.find();
};

export const getTaskById = async (id) => {
  return await Task.findById(id);
};

export const updateTask = async (id, updatedData) => {
  return await Task.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
};

export const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};
