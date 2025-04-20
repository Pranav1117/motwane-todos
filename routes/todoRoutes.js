const express = require("express");
const router = express.Router();
const TodoController = require("../controller/todoController");

router.post("/createtodo", TodoController.create);
router.get("/getalltodos", TodoController.getAll);
router.patch("/updatetodo/:id", TodoController.update);
router.delete("/deletetodo/:id", TodoController.delete);

module.exports = router;
