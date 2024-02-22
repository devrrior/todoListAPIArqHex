import {Task} from "../entities/task.entity";

export interface TaskRepository {
    create(task: Task): Promise<Task>;
    list(): Promise<Task[]>;
    get(id: string): Promise<Task | null>;
    update(id: string, task: Task): Promise<Task | null>;
    delete(id: string): Promise<null>;
}