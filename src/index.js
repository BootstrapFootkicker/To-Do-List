import {compareAsc, format} from 'date-fns'
import css from "./style.css";

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


function saveToLocalStorage() {

}
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}



class DomController {

    clear(element) {
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
    }

    createAddTaskButton() {
        let taskDetailContainer = document.querySelector('.task-detail-container');
        let createButtonDiv = document.createElement('div'); //remove this
        let createButton = document.createElement('button');
        createButton.innerText = '+ Add Task'
        createButton.classList.add('create-button')
        createButtonDiv.classList.add('create-buttonDiv')
        createButtonDiv.appendChild(createButton)


        taskDetailContainer.appendChild(createButtonDiv);

        createButton.addEventListener('click', () => {
            domControl.clear(createButtonDiv);
            createButtonDiv.appendChild(domControl.createInputPopUp());
        })

    }


    createInputPopUp() {


        let popUpContainer = document.createElement('div');
        let taskDateContainer = document.createElement('div');
        let taskInput = document.createElement('input');
        let dateInput = document.createElement('input')
        let buttonContainer = document.createElement('div')
        let addButton = document.createElement('button')
        let cancelButton = document.createElement('button');


        dateInput.type = 'date';
        addButton.innerText = 'Add';
        cancelButton.innerText = 'Cancel'

        taskDateContainer.appendChild(taskInput);
        taskDateContainer.appendChild(dateInput)

        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(cancelButton);

        popUpContainer.appendChild(taskDateContainer)
        popUpContainer.appendChild(buttonContainer)

        addButton.addEventListener('click', () => {
            let newTask = new Task(uniqueId,taskInput.value, dateInput.value);
            mainTaskFolder.addTask(newTask);
            let createButtonDiv = document.querySelector('.create-buttonDiv');
            createButtonDiv.remove();
            this.addTaskToDom(taskInput.value, dateInput.value);
            this.createAddTaskButton();
        })
        return popUpContainer;
    }

    addTaskFolderToDom(TaskFolder) {
        let taskContainerContent = document.querySelector(".tasks-container-content");
        let taskFolder = document.createElement('button')
        let taskFolderListContainer = document.createElement('li')
        taskFolder.innerText = TaskFolder.getName();
        taskFolderListContainer.appendChild(taskFolder)
        taskContainerContent.appendChild(taskFolderListContainer);

    }

    addTaskToDom(taskText, taskDateInfo) {
        let taskDetailContainer = document.querySelector('.task-detail-container');
        let task = document.createElement('div');
        let checkBoxContainer = document.createElement('div');
        let checkBox = document.createElement('input');
        let taskInfo = document.createElement('div');
        let taskDate = document.createElement('input');

        task.setAttribute('id', uniqueId)
        uniqueId+=1;
        taskDate.type = 'date';
        taskDate.value = taskDateInfo;
        task.classList.add('task')
        checkBoxContainer.classList.add('checkbox-container')
        taskInfo.classList.add('task-info')
        taskInfo.innerText = taskText;


        checkBox.type = 'checkbox'

        checkBox.addEventListener('click', () => {
            if (checkBox.checked) {
                mainTaskFolder.removeTask(task.id);
                console.log(mainTaskFolder.getTaskList());
                this.removeTaskFromDom(task.id)


            }


        })

        checkBoxContainer.appendChild(checkBox);
        checkBoxContainer.appendChild(taskInfo);
        task.appendChild(checkBoxContainer);
        task.appendChild(taskDate);


        taskDetailContainer.setAttribute('id', taskInfo + 'div')

        taskDetailContainer.appendChild(task);


    }


    removeTaskFromDom(taskId) {
        let task = document.getElementById(taskId);
        console.log(taskId + ' removed from dom')
        task.remove();


    }


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

    toString() {
        for (let i = 0; i < this._taskList.length; i++) {
            console.log(this._taskList[i].getName());
        }

    }

    //helpers
    addTask(Task) {
        this._taskList.push(Task);
        console.log(`${Task.getName()} added to ${this.getName()} folder`)
          console.log(mainTaskFolder.getTaskList());
    }
    
    removeTask(taskId) {
        this.taskExists(taskId, mainTaskFolder);
        // if(this.taskExists(taskId, this._taskList)){
        //     console.log("It really exists")
        //     let taskIndex = this._taskList.findIndex(element => element.getName() === taskId.getName());
        //     this._taskList.splice(taskIndex, 1);
        //     console.log(`${taskId.getName()} removed from ${this.getName()} folder`)
        // }
        // else
        // {
        //     console.log("It doesn't exist");
        }




    taskExists(taskId) {


        let doesExist;
        console.log(this._taskList + " taskList")
        for (let i = 0; i < this._taskList.length; i++) {
            console.log(this._taskList[i].getName() + " taskList[i].getName()")}

            // console.log(folderList[taskNumber].getName());
            // doesExist = (folderList[taskNumber].getName()) === taskId;
            if (doesExist === true) {
                return doesExist;
            }
        }

}

// function findTaskfolderIndex(folderName) {
//     let isTitle = (element) => element.getName() === folderName;
//     return taskFolders.findIndex(isTitle);
//
//
// }

const CREATE_TASK_BUTTON = document.querySelector('#create-task');
const mytaskbutton = document.querySelector('.taskfolder-button');
const addTaskButton = document.querySelector('#add-task');
const createButtonDiv = document.querySelector('.create-buttonDiv')

let folderOption = 'My Tasks';
let mainTaskFolder = new TaskFolder('Main');
let uniqueId = 0;




let domControl = new DomController();


mytaskbutton.addEventListener('click', () => {
    folderOption = mytaskbutton.innerText
    console.log(folderOption)
})


domControl.createAddTaskButton();