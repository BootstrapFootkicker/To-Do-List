import {compareAsc, format} from 'date-fns'


class Task {
    constructor(name, description, dueDate) {
        this._name = name;
        this._description = description;
        this._dueDate = dueDate;
    }

    //Getters
    getName() {
        return this._name;
    }

    getDescription(){
        return this._description;
    }

    getDueDate(){
        return this._dueDate;
    }

}


class TaskFolder{
    constructor(name) {
        this._taskList=[]
    }

    //Getters
    getTaskList(){
        return this._taskList;
    }

    //helpers
    addTask(name,description,dueDate){
        let task = new Task(name,description,dueDate);
        this._taskList.push(task);
    }

    removeTask(taskId){
        //find index of task using dom Id and pop task maybe?
    }
}

