const TodoModel = require("../models/todoModel");
const { priorityMap } = require("../constants");

const createTodo = async (data) => {
  const { title, description, priority, dueDate } = data;

  if (!title || !priority || !priorityMap[priority])
    throw new Error("Invalid or missing data");

  const todo = {
    title,
    description,
    dueDate: new Date(dueDate),
    priority,
    priorityValue: priorityMap[priority],
  };

  return await TodoModel.createTodo(todo);
};

const getTodos = async (params) => {
  return await TodoModel.getAllTodos(params);
};

const updateTodo = async (id, data) => {
  if (data.priority) {
    data.priorityValue = priorityMap[data.priority];
  }
  return await TodoModel.updateTodo(id, data);
};

const deleteTodo = async (id) => {
  return await TodoModel.deleteTodo(id);
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
