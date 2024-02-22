import express from 'express';
import morgan from 'morgan';
import {taskRouter} from './task-management/infrastructure/routes/taskRoutes';

const bootstrap = async () => {
    const app = express();

    app.use(express.json());
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

    app.use('/api/tasks', taskRouter);

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}

bootstrap();