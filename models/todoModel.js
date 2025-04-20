const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");
const { priorityMap, dueDateMap } = require("../constants");

const collectionName = "todos";

const createTodo = async (todo) => {
  const db = await getDB();
  return db.collection(collectionName).insertOne(todo);
};

const getAllTodos = async (params) => {
  const db = await getDB();
  return db
    .collection(collectionName)
    .find({})
    .sort({
      priority: params.priority ? priorityMap[params.priority] : 1,
      dueDate: params.dueDate ? dueDateMap[params.dueDate] : 1,
    })
    .toArray();
};

const getTodoById = async (id) => {
  const db = await getDB();

  if (!id || typeof id !== "string") {
    return new Error("id is not valid");
  }

  return db.collection(collectionName).findOne({ _id: new ObjectId(id) });
};

const updateTodo = async (id, updateData) => {
  const db = await getDB();
  if (!id || typeof id !== "string") {
    return new Error("id is not valid");
  }
  return db
    .collection(collectionName)
    .updateOne({ _id: new ObjectId(id) }, { $set: updateData });
};

const deleteTodo = async (id) => {
  const db = await getDB();
  if (!id || typeof id !== "string") {
    return new Error("id is not valid");
  }
  return db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
