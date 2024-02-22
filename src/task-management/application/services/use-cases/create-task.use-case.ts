import {Task} from "../../../domain/entities/task.entity";
import {TaskRepository} from "../../../domain/repositories/task.repository";
import { v4 as uuidv4 } from 'uuid';

export class CreateTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {
    }

    async execute(content: string): Promise<Task> {
        const id = uuidv4();
        const task = new Task(id, content, false);
        return await this.taskRepository.create(task);
    }
}