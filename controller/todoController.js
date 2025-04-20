const TodoService = require("../services/todoService");

class TodoController {
  static async create(req, res, next) {
    try {
      const result = await TodoService.createTodo(req.body);
      return res.status(201).json({ message: "Todo created", result });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    const params = req.query;
    try {
      const todos = await TodoService.getTodos(params);
      return res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const updated = await TodoService.updateTodo(id, req.body);
      return res.status(200).json({ message: "Todo updated", updated });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      await TodoService.deleteTodo(id);
      return res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TodoController;
