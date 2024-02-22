import {TaskRepository} from "../../../domain/repositories/task.repository";

export class ListTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {
    }

    async execute() {
        return await this.taskRepository.list();
    }
}