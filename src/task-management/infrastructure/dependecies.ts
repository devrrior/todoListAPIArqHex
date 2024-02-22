import {CreateTaskUseCase} from "../application/services/use-cases/create-task.use-case";
import {GetTaskUseCase} from "../application/services/use-cases/get-task.use-case";
import {UpdateTaskUseCase} from "../application/services/use-cases/update-task.use-case";
import {InMemoryTaskRepository} from "./repositories/in-memory-task.repository";
import {DeleteTaskUseCase} from "../application/services/use-cases/delete-task.use-case";
import {ListTaskUseCase} from "../application/services/use-cases/list-task.use-case";
import {TaskController} from "./controllers/task.controller";

const inMemoryRepository = new InMemoryTaskRepository();

const createTaskUseCase = new CreateTaskUseCase(inMemoryRepository);
const getTaskUseCase = new GetTaskUseCase(inMemoryRepository);
const listTaskUseCase = new ListTaskUseCase(inMemoryRepository);
const updateTaskUseCase = new UpdateTaskUseCase(inMemoryRepository);
const deleteTaskUseCase = new DeleteTaskUseCase(inMemoryRepository);

export const taskController = new TaskController(createTaskUseCase, getTaskUseCase, listTaskUseCase, updateTaskUseCase, deleteTaskUseCase);