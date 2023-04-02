import {compareAsc, format} from 'date-fns'
import css from "./style.css";

const CREATE_TASK_BUTTON = document.querySelector('#create-task');
let myTasks = [];


document.addEventListener('click', e => {

    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    //are we in dropdown? ignore click if so
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) {
        return
    }

    //if we are clicking dropdown add active class
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    //closes all dropdowns that are not selected
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) {
            return
        }
        dropdown.classList.remove('active')
    })
})

class DomController {

    addTaskFolderToDom(TaskFolder) {
        let taskContainerContent = document.querySelector(".tasks-container-content");
        let taskFolder = document.createElement('button')
        let taskFolderListContainer = document.createElement('li')
        taskFolder.innerText = TaskFolder.getName();
        taskFolderListContainer.appendChild(taskFolder)
        taskContainerContent.appendChild(taskFolderListContainer);

    }

    addTaskToDom() {
        let taskDetailContainer = document.querySelector('.task-detail-container');
        let task = document.createElement('div');
        let checkBoxContainer = document.createElement('div');
        let checkBox = document.createElement('input');
        let taskInfo = document.createElement('div');
        let taskDate = document.createElement('div');

        task.classList.add('task')
        checkBoxContainer.classList.add('checkbox-container')
        taskInfo.classList.add('task-info')
        // taskDate.classList.add('')


        checkBox.type = 'checkbox'

        taskInfo.setAttribute('contenteditable', 'true');
        taskDate.setAttribute('contenteditable', 'true');

        taskInfo.innerText = 'Enter Task Name';
        taskDate.innerText = '';


        checkBoxContainer.appendChild(checkBox);
        checkBoxContainer.appendChild(taskInfo);
        task.appendChild(checkBoxContainer);
        task.appendChild(taskDate);

        taskInfo.focus();

        taskDetailContainer.setAttribute('id', taskInfo + 'div')

        taskDetailContainer.appendChild(task);

        let newTask = new Task('task', taskInfo.innerText, taskDate.innerText)


    }

    displayFolderTasks(TaskFolder) {

        for (let i = 0; i < TaskFolder.getTaskList().length; i++) {
            console.log(TaskFolder.getTaskList()[i]);
            this.addTaskToDom(TaskFolder.getTaskList()[i]);
        }
    } 

    //add way to find specific dom element and remove task. probably take id from check box or add id to task
}

class Task {
    //let user create name so it's easy to find task fo modify
    constructor(name, description, dueDate) {
        this._name = name;
        this._description = description;
        this._dueDate = dueDate;
    }

    //Getters
    getName() {
        return this._name;
    }

    getDescription() {
        return this._description;
    }

    getDueDate() {
        return this._dueDate;
    }

}


class TaskFolder {
    constructor(name) {
        this.name = name;
        this._taskList = []
    }

    //Getters
    getName() {
        return this.name;
    }

    getTaskList() {
        return this._taskList;
    }

    //helpers
    addTask(Task) {
        this._taskList.push(Task);
    }


    taskExists(task, folderList) {


        let doesExist;
        for (let taskNumber in folderList) {

            doesExist = (folderList[taskNumber].getName() === task.getName());
            if (doesExist === true) {
                return doesExist;
            }
        }
    }

    removeTask(taskId) {
        //find index of task using dom Id and pop task maybe?
    }
}


let
    testFolder = new TaskFolder('this is a test');
let
    domTester = new DomController();
let doit = new Task('that', 'test', '02/04/2566')
let doit2 = new Task('that2', 'test', '02/04/2566')
let doit3 = new Task('that3', 'test', '02/04/2566')
let doit4 = new Task('that4', 'test', '02/04/2566')


testFolder.addTask(doit)
testFolder.addTask(doit2)
testFolder.addTask(doit3)
testFolder.addTask(doit4)


//domTester.displayFolderTasks(testFolder);


// CREATE_TASK_BUTTON
//     .addEventListener(
//         'click'
//         ,
//         domTester
//             .addTaskToDom
//     )


console.log(testFolder.taskExists(doit2,testFolder.getTaskList()))