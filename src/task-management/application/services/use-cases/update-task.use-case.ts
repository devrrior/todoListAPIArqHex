import {TaskRepository} from "../../../domain/repositories/task.repository";
import {Task} from "../../../domain/entities/task.entity";
import {TaskEntityInterface} from "../../../domain/entities/interfaces/task-entity.interface";

export class UpdateTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {
    }

    async execute(id: string, task: TaskEntityInterface): Promise<Task | null> {
        const foundTask = await this.taskRepository.get(id);
        if (!foundTask) {
            return null;
        }

        foundTask.content = task.content;
        foundTask.isDone = task.isDone;

        return this.taskRepository.update(id, foundTask);
    }
}