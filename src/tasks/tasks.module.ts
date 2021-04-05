import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './shared/schemas/task.schemas';
import { TaskServise } from './shared/task.servise';
import { TasksController } from './tasks.controller';

@Module({
    imports: [MongooseModule.forFeature([{name:'Task', schema: TaskSchema}])],
    controllers: [TasksController],
    providers: [TaskServise],
})
export class TasksModule {}
