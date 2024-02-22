import express from "express";
import {taskController} from "../dependecies"

export const taskRouter = express.Router();

taskRouter.post(
    "/",
    taskController.create.bind(taskController)
);

taskRouter.get(
    "/",
    taskController.list.bind(taskController)
);

taskRouter.get(
    "/:id",
    taskController.get.bind(taskController)
);

taskRouter.put(
    "/:id",
    taskController.update.bind(taskController)
);

taskRouter.delete(
    "/:id",
    taskController.delete.bind(taskController)
);