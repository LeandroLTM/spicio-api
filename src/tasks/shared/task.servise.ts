import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks';

@Injectable()
export class TaskServise {
    tasks: Tasks[] = [{
        idMovie: "tt0848228",title: "avengers",
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: "8.0"}
    ]

    getAll(){
        return this.tasks;
    }

    getById(id:string){
        return this.tasks.find((value) => id == value.idMovie);
    }


    create(task: Tasks){
        this.tasks.push(task);
        return task;
    }

    delete(id: string){
        const index = this.tasks.findIndex((value) => id == value.idMovie);
        this.tasks.splice(index,1);
    }
}
