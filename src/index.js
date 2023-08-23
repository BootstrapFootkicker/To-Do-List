import {compareAsc, format} from 'date-fns'
import css from "./style.css";
import {te, th} from "date-fns/locale";


//todo: add edit button to task

//todo: add edit button to task folder


function localStorageRefresh(item) {
    localStorage.setItem(item.getName(), JSON.stringify(item));
    console.log("refreshed")

}

function UniqueIdToLocalStore(uniqueId) {
    localStorage.setItem('uniqueId', JSON.stringify(uniqueId));
}

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
        return (e instanceof DOMException && // everything except Firefox
            (e.code === 22 || // Firefox
                e.code === 1014 || // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" || // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
            storage && storage.length !== 0);
    }
}


class DomController {

    clear(element) {
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
    }

    createAddTaskFolderButton() {
        const buttonList = document.querySelector('.button-list-content');

        let createTaskFolderButton = document.createElement('button');
        createTaskFolderButton.innerText = '+ Add Task Folder'
        createTaskFolderButton.classList.add('create-button')
        createTaskFolderButton.setAttribute('id', 'create-task-folder-button')
        buttonList.appendChild(createTaskFolderButton);

        createTaskFolderButton.addEventListener('click', () => {
            createTaskFolderButton.remove();
            buttonList.appendChild(this.createTaskFolderButtonInputPopUp());
        })
    }

    createAddTaskButton() {
        const taskDetailContainer = document.querySelector('.task-detail-container');
        let createButtonDiv = document.createElement('div'); //remove this
        let createButton = document.createElement('button');
        createButton.innerText = '+ Add Task'
        createButton.classList.add('create-button')
        createButtonDiv.classList.add('create-buttonDiv')

        createButtonDiv.appendChild(createButton)


        taskDetailContainer.appendChild(createButtonDiv);

        createButton.addEventListener('click', () => {
            this.clear(createButtonDiv);
            createButtonDiv.appendChild(this.createTaskInputPopUp());
        })

    }


    createTaskFolderButtonInputPopUp() {
        let inputDiv = document.createElement('div');
        let input = document.createElement('input');
        let addButton = document.createElement('button');

        addButton.innerText = 'Add';

        inputDiv.appendChild(input);
        inputDiv.appendChild(addButton);

        addButton.addEventListener('click', () => {
            inputDiv.remove();
            let newTaskFolder = new TaskFolder(input.value, null);
            MainTaskFolderContainer.addTaskFolder(newTaskFolder);
            localStorageRefresh(MainTaskFolderContainer);
            this.createTaskFolderButton(newTaskFolder);

        })
        return inputDiv

    }

    createTaskInputPopUp() {


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

        popUpContainer.classList.add('pop-up-container');
        popUpContainer.setAttribute('id', 'pop-up-container');

        taskDateContainer.appendChild(taskInput);
        taskDateContainer.appendChild(dateInput)

        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(cancelButton);

        popUpContainer.appendChild(taskDateContainer)
        popUpContainer.appendChild(buttonContainer)

        addButton.addEventListener('click', () => {
            let newTask = new Task(uniqueId, taskInput.value, dateInput.value);
            MainTaskFolderContainer.getTaskFolder(currentTaskFolder).addTask(newTask);
            let createButtonDiv = document.querySelector('.create-buttonDiv');
            createButtonDiv.remove();
            this.addTaskToDom(taskInput.value, dateInput.value);
            this.createAddTaskButton();
            localStorageRefresh(MainTaskFolderContainer);

        })

        cancelButton.addEventListener("click", () => {
            let createButtonDiv = document.querySelector('.create-buttonDiv');
            createButtonDiv.remove();
            this.createAddTaskButton()
        })
        return popUpContainer;
    }


    addTaskToDom(taskText, taskDateInfo, taskID = uniqueId) {

        let taskDetailContainer = document.querySelector('.task-detail-container');
        let task = document.createElement('div');
        let checkBoxContainer = document.createElement('div');
        let checkBox = document.createElement('input');
        let taskInfo = document.createElement('div');
        let taskDate = document.createElement('input');

        //taskID = taskID || uniqueId
        console.log(taskID)
        if (taskID !== uniqueId) {
            task.setAttribute('id', taskID)
        } else {
            task.setAttribute('id', uniqueId)
            uniqueId += 1;
            UniqueIdToLocalStore(uniqueId);
        }


        taskDate.type = 'date';
        taskDate.value = taskDateInfo;
        task.classList.add('task')
        checkBoxContainer.classList.add('checkbox-container')
        taskInfo.classList.add('task-info')
        taskInfo.innerText = taskText;


        checkBox.type = 'checkbox'

        checkBox.addEventListener('click', () => {
            if (checkBox.checked) {
                MainTaskFolderContainer.getTaskFolder(currentTaskFolder).removeTask(task.id, MainTaskFolderContainer.getTaskFolder(currentTaskFolder));
                this.removeTaskFromDom(task.id)
                localStorageRefresh(MainTaskFolderContainer);


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

    populateDomFromLocalStorage(key) {
        let tasklist = []
        let taskIDS = []
        let taskFolderIndex = 0
        if (localStorage.getItem("TaskFolderContainer") !== null) {

            console.log("Local Storage Populated")
            let tempTaskFolderContainer = JSON.parse(localStorage.getItem('TaskFolderContainer'))._taskFolderList;
            MainTaskFolderContainer.setTaskFolderList(tempTaskFolderContainer);
            MainTaskFolderContainer.setTaskFolderClass();
            console.log(MainTaskFolderContainer.getTaskFolderList())

            for (let i = 0; i < MainTaskFolderContainer.getTaskFolderList().length; i++) {
                MainTaskFolderContainer.getTaskFolderList()[i].setTaskClass()
            }

            tasklist = MainTaskFolderContainer.getTaskFolder(key).getTaskList();

            taskFolderIndex = MainTaskFolderContainer.getTaskFolderIndex(key)
            taskIDS = MainTaskFolderContainer.getTaskFolderList()[taskFolderIndex].getTaskIDS()

            uniqueId = Number(localStorage.getItem('uniqueId'));

            for (let i = 0; i < tasklist.length; i++) {

                if (document.querySelector("#" + CSS.escape(taskIDS[i])) === null) {
                    console.log(tasklist[i].getName())
                    this.addTaskToDom(tasklist[i].getDescription(), tasklist[i].getDueDate(), tasklist[i].getName())
                } else {

                    console.log(`Div ${taskIDS[i]} is Already in DOM`)
                }


            }
            if (document.querySelector('.create-buttonDiv') === null) {

                this.createAddTaskButton();
            }

        } else /*else if additional folder check*/ {
            let MainTaskFolder = new TaskFolder('Main', null);
            MainTaskFolderContainer.addTaskFolder(MainTaskFolder);
            console.log("No tasks in local storage")
            //this.createAddTaskButton();

        }
        if (document.querySelector('.create-buttonDiv') === null) {
            this.createAddTaskButton();
        }
    }


    createTaskFolderButton(newTaskFolder) {
        const buttonListContent = document.querySelector('.button-list-content');
        let taskFolderButton = document.createElement('button');
        taskFolderButton.innerText = newTaskFolder.getName();
        taskFolderButton.addEventListener('click', () => {
            // this.populateDomFromLocalStorage(newTaskFolder.getName());
        })
        buttonListContent.appendChild(taskFolderButton);
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

class TaskFolderContainer {
    constructor(name) {
        this.name = name;
        this._taskFolderList = []
    }

    //Getters
    getName() {
        return this.name;
    }

    getTaskFolderList() {
        return this._taskFolderList;
    }

    setTaskFolderList(taskFolderList) {
        this._taskFolderList = [...taskFolderList];
    }

    setTaskFolderClass() {
        //removes all values from array
        for (let i = 0; i < this._taskFolderList.length; i++) {
            this._taskFolderList[i] = new TaskFolder(this._taskFolderList[i]._name, this._taskFolderList[i]._taskList);
            console.log(this._taskFolderList[i].getName());

        }
    }

    taskFolderExists(taskFolderName) {
        for (let i = 0; i < this._taskFolderList.length; i++) {
            if (this._taskFolderList[i].getName() === taskFolderName) {
                return true;
            }
        }
        return false;
    }

    addTaskFolder(taskFolderName) {
        if (this.taskFolderExists(taskFolderName)) {
            console.log("Task Folder Already Exists");
        } else {
            this._taskFolderList.push(taskFolderName);
            localStorageRefresh(MainTaskFolderContainer);
            console.log(`${taskFolderName.toString()} added to ${this.getName()} container`);
        }
    }

    removeTaskFolder(taskFolderName) {
        if (this.taskFolderExists(taskFolderName)) {
            for (let i = 0; i < this._taskFolderList.length; i++) {
                if (this._taskFolderList[i].getName() === taskFolderName) {
                    this._taskFolderList.splice(i, 1);
                    localStorageRefresh(MainTaskFolderContainer);
                    console.log(`${taskFolderName} removed from ${this.getName()} container`);
                }
            }
        } else {
            console.log("Task Folder does not exist");
        }
    }

    getTaskFolder(taskFolderName) {
        if (this.taskFolderExists(taskFolderName)) {
            for (let i = 0; i < this._taskFolderList.length; i++) {
                if (this._taskFolderList[i].getName() === taskFolderName) {
                    return this._taskFolderList[i];
                }
            }
        } else {
            console.log("Task Folder does not exist");
        }
    }

    getTaskFolderIndex(taskFolderName) {
        if (this.taskFolderExists(taskFolderName)) {
            for (let i = 0; i < this._taskFolderList.length; i++) {
                if (this._taskFolderList[i].getName() === taskFolderName) {
                    return i;
                }
            }
        } else {
            console.log("Task Folder does not exist");
        }
    }


    toString() {
        for (let i = 0; i < this._taskFolderList.length; i++) {
            console.log(this._taskFolderList[i].getName());
        }

    }


}

class TaskFolder {
    constructor(name, tasklist) {
        this._name = name;
        if (tasklist !== null) {
            this._taskList = tasklist;
        } else {
            this._taskList = []
        }
    }

    //Getters
    getName() {
        return this._name;
    }

    getTaskList() {
        return this._taskList;
    }

    setTaskList(taskList) {
        this._taskList = taskList;
    }

    toString() {
        for (let i = 0; i < this._taskList.length; i++) {
            console.log(this._taskList[i].getName());
        }

    }

    //helpers
    addTask(Task) {
        if (this.taskExists(Task.getName(), this)) {
            console.log("Task already exists");
            return;
        } else {
            this._taskList.push(Task);
            console.log(`${Task.getName()} added to ${this.getName()} folder`)
            console.log(MainTaskFolderContainer.getTaskFolder(currentTaskFolder).getTaskList());

        }
    }


    removeTask(taskId, taskFolder) {

        if (taskFolder.taskExists(taskId, taskFolder)) {
            taskFolder._taskList.splice(taskFolder._taskList.findIndex(task => task.getName().toString() === taskId), 1);
            console.log(`${taskId} removed from ${taskFolder.getName()} folder`);
            console.log(taskFolder.getTaskList());

        } else {
            console.log("Task doesn't exist")
        }

    }

    setTaskClass() {
        for (let i = 0; i < this._taskList.length; i++) {
            this._taskList[i] = new Task(this._taskList[i]._name, this._taskList[i]._description, this._taskList[i]._dueDate);
        }
    }


    taskExists(taskId, taskFolder) {

        let taskFolderList = taskFolder.getTaskList();
        let doesExist;


        for (let i = 0; i < taskFolderList.length; i++) {
            if (taskId === taskFolderList[i].getName().toString()) {
                doesExist = true;
                return doesExist;
            }
        }
    }

    getTaskIDS() {
        let taskIDS = [];
        for (let i = 0; i < this._taskList.length; i++) {
            taskIDS.push(this._taskList[i].getName());
        }
        return taskIDS;
    }

}


const CREATE_TASK_BUTTON = document.querySelector('#create-task');
const mytaskbutton = document.querySelector('.taskfolder-button');
const addTaskButton = document.querySelector('#add-task');
const createButtonDiv = document.querySelector('.create-buttonDiv')
const mainFolderButton = document.querySelector('#Main-folder-button');

//Global Variables

let currentTaskFolder = 'Main';
let MainTaskFolderContainer = new TaskFolderContainer('TaskFolderContainer');


//todo need to rewrite functions to pull folder from taskfolder container, not just main folder. Current task folder will be a global way to keep track of which folder is being used!
mainFolderButton.addEventListener('click', () => {
    domControl.populateDomFromLocalStorage('Main');
})
//Used to label tasks with unique id (both in dom and in taskFolder)
let uniqueId = 0;


let domControl = new DomController();

domControl.populateDomFromLocalStorage('Main');

domControl.createAddTaskFolderButton()






