import {Task} from "../../domain/entities/task.entity";
import {TaskRepository} from "../../domain/repositories/task.repository";
import {tasks} from "../in-memory-db/db";


export class InMemoryTaskRepository implements TaskRepository {
    private initTasks: Task[] = tasks;

    create(task: Task): Promise<Task> {
        tasks.push(task);
        return Promise.resolve(task);
    }

    list(): Promise<Task[]> {
        return Promise.resolve(this.initTasks);
    }

    get(id: string): Promise<Task | null> {
        return Promise.resolve(this.initTasks.find(task => task.id === id) || null);
    }

    update(id: string, task: Task): Promise<Task | null> {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) {
            return Promise.resolve(null);
        }

        tasks[taskIndex] = task;
        return Promise.resolve(task);
    }

    delete(id: string): Promise<null> {
        tasks.splice(tasks.findIndex(task => task.id === id), 1);
        return Promise.resolve(null);
    }

}