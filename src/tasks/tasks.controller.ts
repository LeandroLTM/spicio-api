import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskServise } from './shared/task.servise';
import { Tasks } from './shared/tasks';

@Controller('tasks')
export class TasksController {
    constructor(private taskServise: TaskServise){}

    @Get()
    async getAll() : Promise<Tasks[]>{
        return this.taskServise.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id:string): Promise<Tasks>{
        return this.taskServise.getById(id);
    }

    @Post()
    async create(@Body() task:Tasks): Promise<Tasks>{
        return this.taskServise.create(task);
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        this.taskServise.delete(id);
    }


}
