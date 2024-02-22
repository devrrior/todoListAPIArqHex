import {TaskRepository} from "../../../domain/repositories/task.repository";
import {Task} from "../../../domain/entities/task.entity";

export class GetTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {
    }

    async execute(id: string): Promise<Task | null> {
        return await this.taskRepository.get(id);
    }
}