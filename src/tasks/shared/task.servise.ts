import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tasks } from './tasks';

@Injectable()
export class TaskServise {

    constructor(@InjectModel('Task') private readonly taskModel: Model<Tasks>){ }

    async getAll(){
        return this.taskModel.find().exec();
    }

    async getById(id:string){
        return this.taskModel.findById(id).exec();
    }


    async create(task: Tasks){
        const createTask = new this.taskModel(task);
        return await createTask.save();
    }

    async delete(id: string){
        return await this.taskModel.deleteOne({_id: id}).exec();
    }
}
