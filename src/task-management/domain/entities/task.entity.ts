import {TaskEntityInterface} from "./interfaces/task-entity.interface";

export class Task implements TaskEntityInterface{
    id: string;
    content: string;
    isDone: boolean;

    constructor(id: string, content: string, isDone: boolean) {
        this.id = id;
        this.content = content;
        this.isDone = isDone;
    }
}