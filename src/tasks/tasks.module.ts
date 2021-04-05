import { Module } from '@nestjs/common';
import { TaskServise } from './shared/task.servise';
import { TasksController } from './tasks.controller';

@Module({
    imports: [],
    controllers: [TasksController],
    providers: [TaskServise],
})
export class TasksModule {}
