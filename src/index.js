import {compareAsc, format} from 'date-fns'
import css from "./style.css";
import {el, te, th} from "date-fns/locale";
import Trash from "./Trash.svg"
import TrashHover from "./TrashHover.svg"

//todo Add restraint to creating task folders with leading numbers as the name
//todo work on css
//todo fix color for taskbutton hover


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


//testing if browser supports local storage
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
        let cancelButton = document.createElement('button');
        let buttonContainer = document.createElement('div');

        addButton.innerText = 'Add';
        cancelButton.innerText = 'Cancel'

        inputDiv.appendChild(input);
        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(cancelButton);
        inputDiv.appendChild(buttonContainer);

        addButton.classList.add('add-button')
        cancelButton.classList.add('cancel-button')

        buttonContainer.setAttribute('id', 'Taskfolder-button-input-div-button-container')
        inputDiv.setAttribute('id', 'Taskfolder-button-input-div')

        addButton.addEventListener('click', () => {
            if (input.value === '' || MainTaskFolderContainer.taskFolderExists(input.value) === true) {

                //Todo: add error message and CSS to show error
                input.setCustomValidity('Please enter a unique task folder name');
                return
            } else {
                inputDiv.remove();
                let newTaskFolder = new TaskFolder(input.value, null);
                MainTaskFolderContainer.addTaskFolder(newTaskFolder);
                localStorageRefresh(MainTaskFolderContainer);
                this.createTaskFolderButton(newTaskFolder);
                currentTaskFolder = newTaskFolder.getName();
                let taskDetailContainer = document.querySelector('.task-detail-container');
                this.clear(taskDetailContainer);
                this.createAddTaskButton()

                this.createAddTaskFolderButton();

            }

        })

        cancelButton.addEventListener('click', () => {
            let inputDivSelector = document.querySelector('#Taskfolder-button-input-div');
            inputDivSelector.remove();
            this.createAddTaskFolderButton();
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

        dateInput.setAttribute('id', 'date-input')
        taskInput.setAttribute('id', 'task-input')

        dateInput.type = 'date';
        addButton.innerText = 'Add';
        cancelButton.innerText = 'Cancel'

        addButton.classList.add('add-button')
        cancelButton.classList.add('cancel-button')


        popUpContainer.classList.add('pop-up-container');
        popUpContainer.setAttribute('id', 'pop-up-container');


        taskDateContainer.appendChild(taskInput);
        taskDateContainer.appendChild(dateInput)

        taskDateContainer.setAttribute('id', 'task-date-container')

        buttonContainer.setAttribute('id', 'popup-button-container')
        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(cancelButton);

        popUpContainer.appendChild(taskDateContainer)
        popUpContainer.appendChild(buttonContainer)


        addButton.addEventListener('click', () => {
            let input = document.querySelector('#task-input');
            let dateInput = document.querySelector('#date-input');


            if (input.value === '' && dateInput.value === '') {
                dateInput.setCustomValidity('Please enter a date');
                input.setCustomValidity('Please enter a task');
                return;
            } else if (dateInput.value === '') {
                dateInput.setCustomValidity('Please enter a date');
                return
            } else if (input.value === '') {
                input.setCustomValidity('Please enter a task');
                return;
            } else {

                let newTask = new Task(uniqueId, taskInput.value, dateInput.value);
                MainTaskFolderContainer.getTaskFolder(currentTaskFolder).addTask(newTask);
                let createButtonDiv = document.querySelector('.create-buttonDiv');
                createButtonDiv.remove();
                this.addTaskToDom(taskInput.value, dateInput.value);
                this.createAddTaskButton();
                localStorageRefresh(MainTaskFolderContainer);


            }
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
        let taskInfoContainer = document.createElement('div');
        let taskDateContainer = document.createElement('div');


        const editImg = document.createElement('img');
        const editImgHover = document.createElement('img');
        const checkMark = document.createElement('img');
        const checkMarkHover = document.createElement('img');

        taskDateContainer.classList.add('task-date-container')

        checkMarkHover.src = "./9255a9fa4b52f69c4d60.svg"
        checkMark.src = "./921761edc49b6165eeb8.svg"
        editImgHover.src = "./4e81888b154c1edd1157.svg"
        editImg.src = "./3ea4cf483224d228ffe4.svg";

        checkMark.classList.add('edit-img');
        editImg.classList.add('edit-img');


        if (taskID !== uniqueId) {
            task.setAttribute('id', taskID)
        } else {
            task.setAttribute('id', uniqueId)
            uniqueId += 1;
            UniqueIdToLocalStore(uniqueId);
        }


        taskDate.type = 'date';
        taskDate.value = taskDateInfo;
        taskDate.setAttribute('id', taskID + 'task-date')
        taskDate.disabled = true;
        task.classList.add('task')
        checkBoxContainer.classList.add('checkbox-container')
        taskInfo.classList.add('task-info')
        taskInfo.innerText = taskText;
        taskInfoContainer.classList.add('task-info-container')


        checkBox.type = 'checkbox'


        checkBox.addEventListener('click', () => {
            if (checkBox.checked) {
                MainTaskFolderContainer.getTaskFolder(currentTaskFolder).removeTask(task.id, MainTaskFolderContainer.getTaskFolder(currentTaskFolder));
                this.removeTaskFromDom(task.id)
                localStorageRefresh(MainTaskFolderContainer);


            }


        })

        editImg.addEventListener('mouseover', () => {
            editImg.style.cursor = 'finger';
            editImg.src = editImgHover.src;

        })
        editImg.addEventListener('mouseout', () => {
            editImg.src = "./3ea4cf483224d228ffe4.svg";
        })

        editImg.addEventListener('click', () => {
            taskDate.disabled = false;
            taskInfo.contentEditable = true;

            //replaces child, refer to this line if bug arises later
            checkBoxContainer.replaceChild(checkMark, editImg)


        })


        checkMark.addEventListener('mouseover', () => {
            checkMark.style.cursor = 'finger';
            checkMark.src = checkMarkHover.src;

        })

        checkMark.addEventListener('mouseout', () => {
            checkBox.style.cursor = 'finger';
            checkMark.src = './921761edc49b6165eeb8.svg';

        })


        checkMark.addEventListener('click', () => {
            taskDate.disabled = true;
            taskInfo.contentEditable = false;
            editImg.src = "./3ea4cf483224d228ffe4.svg";
            MainTaskFolderContainer.getTaskFolder(currentTaskFolder).getTask(task.id).setDesciption(taskInfo.innerText);
            MainTaskFolderContainer.getTaskFolder(currentTaskFolder).getTask(task.id).setDueDate(taskDate.value);


            localStorageRefresh(MainTaskFolderContainer);
            //replaces child, refer to this line if bug arises later
            checkBoxContainer.replaceChild(editImg, checkMark);
        })


        checkBoxContainer.appendChild(checkBox);

        checkBoxContainer.appendChild(editImg);

        task.appendChild(checkBoxContainer);
        taskInfoContainer.appendChild(taskInfo);
        task.appendChild(taskInfoContainer)
        taskDateContainer.appendChild(taskDate)
        task.appendChild(taskDateContainer);


        taskDetailContainer.setAttribute('id', taskInfo + 'div')

        taskDetailContainer.appendChild(task);


    }


    removeTaskFromDom(taskId) {
        let task = document.getElementById(taskId);
        console.log(taskId + ' removed from dom')
        task.remove();


    }

    PopulateFolderButtonsFromLocalStorage() {
        let taskFolderList = MainTaskFolderContainer.getTaskFolderList();
        for (let i = 1; i < taskFolderList.length; i++) {
            console.log(i)
            console.log("this is it " + document.querySelector((taskFolderList[i].getName().replace(/\s/g, '') + 'button-container')))
            if (document.querySelector('#' + CSS.escape(taskFolderList[i].getName())) === null) {
                if (document.querySelector('#' + CSS.escape(taskFolderList[i].getName().replace(/\s/g, '') + 'button-container')) === null) {


                    this.createTaskFolderButton(taskFolderList[i])
                }
            } else {
                console.log(`${taskFolderList[i].getName()}button already exists`)
            }
        }
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
            this.PopulateFolderButtonsFromLocalStorage();

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
        let trashImg = document.createElement('img');
        let trashImgHover = document.createElement('img');
        let trashButton = document.createElement('button');
        let buttonContainer = document.createElement('div');


        buttonContainer.classList.add('task-folder-container')
        buttonContainer.setAttribute('id', newTaskFolder.getName().replace(/\s/g, '') + 'button-container')
        trashButton.classList.add('trash-button');
        trashButton.innerText = 'X';
        trashButton.setAttribute('id', newTaskFolder.getName().replace(/\s/g, '') + 'trash-button')
        //
        // trashImgHover.src = './5aec9f44e8f425a9b48e.svg';
        // trashImg.src = './a4d452793f9cabb4d420.svg'
        // trashImg.classList.add('trash-img');

        taskFolderButton.innerText = newTaskFolder.getName();
        taskFolderButton.setAttribute('id', newTaskFolder.getName().replace(/\s/g, ''));
        taskFolderButton.classList.add('taskfolder-button');


        buttonContainer.appendChild(taskFolderButton);
        buttonContainer.appendChild(trashButton);
        buttonListContent.appendChild(buttonContainer);


        trashButton.addEventListener('click', () => {
            MainTaskFolderContainer.removeTaskFolder(newTaskFolder.getName());
            let taskFolderContainer = document.querySelector('.task-folder-container');


            if (currentTaskFolder === newTaskFolder.getName()) {
                currentTaskFolder = 'Main';
                buttonContainer.remove()

                let taskDetailContainer = document.querySelector('.task-detail-container');
                this.clear(taskDetailContainer)
                this.populateDomFromLocalStorage('Main');
                // this.PopulateFolderButtonsFromLocalStorage()
            } else {
                buttonContainer.remove()
                // this.populateDomFromLocalStorage(currentTaskFolder);
                // this.PopulateFolderButtonsFromLocalStorage()
            }
        });


        taskFolderButton.addEventListener('click', () => {
            let taskFolderButtons = document.querySelectorAll('.taskfolder-button');
            let mainFolderButton = document.querySelector('#Main-folder-button');
            console.log(taskFolderButtons)
            if (currentTaskFolder === 'Main') {
                {
                    mainFolderButton.setAttribute('style', 'background-color: black;')
                }
            }

            if (currentTaskFolder !== newTaskFolder.getName()) {

                taskFolderButtons.forEach(button => {
                    {
                        button.setAttribute('style', 'background-color: #1e1f21;')
                    }
                })


            }
            currentTaskFolder = newTaskFolder.getName();
            if (currentTaskFolder === newTaskFolder.getName()) {
                taskFolderButton.setAttribute('style', 'background-color: black;')
            }
            console.log(`The current taskfolder has been changed to ${currentTaskFolder}`)
            let taskDetailContainer = document.querySelector('.task-detail-container');
            this.clear(taskDetailContainer)
            this.populateDomFromLocalStorage(newTaskFolder.getName());
            console.log(taskFolderButtons)
        })

        taskFolderButton.addEventListener('mouseover', () => {
            let trashButton = document.querySelector('#' + taskFolderButton.id + 'trash-button');
            trashButton.style.visibility = 'visible';

        })
        taskFolderButton.addEventListener('mouseout', () => {
            let trashButton = document.querySelector('#' + taskFolderButton.id + 'trash-button');
            setTimeout(function () {
                trashButton.style.visibility = 'hidden';
            }, 3000);


        });

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

    setDesciption(description) {
        this._description = description;
    }

    setDueDate(dueDate) {
        this._dueDate = dueDate;
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
        if (this.taskExists(Task.getName())) {
            console.log("Task already exists");
            return;
        } else {
            this._taskList.push(Task);
            console.log(`${Task.getName()} added to ${this.getName()} folder`)
            console.log(MainTaskFolderContainer.getTaskFolder(currentTaskFolder).getTaskList());

        }
    }


    removeTask(taskId) {

        if (this.taskExists(taskId)) {
            this._taskList.splice(this._taskList.findIndex(task => task.getName().toString() === taskId), 1);
            console.log(`${taskId} removed from ${this.getName()} folder`);
            console.log(this.getTaskList());

        } else {
            console.log("Task doesn't exist")
        }

    }

    setTaskClass() {
        for (let i = 0; i < this._taskList.length; i++) {
            this._taskList[i] = new Task(this._taskList[i]._name, this._taskList[i]._description, this._taskList[i]._dueDate);
        }
    }


    taskExists(taskId) {

        let taskFolderList = this.getTaskList();
        let doesExist;


        for (let i = 0; i < taskFolderList.length; i++) {
            if (taskId === taskFolderList[i].getName().toString()) {
                doesExist = true;
                return doesExist;
            }
        }
    }

    getTask(taskId) {
        if (this.taskExists(taskId) === true) {
            return this._taskList[this._taskList.findIndex(task => task.getName().toString() === taskId)];
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


mainFolderButton.addEventListener('click', () => {

    let taskFolderButtons = document.querySelectorAll('.taskfolder-button');
    console.log(taskFolderButtons + 'taskfolderbuttons')
    if (currentTaskFolder !== 'Main') {
        taskFolderButtons.forEach(button => {
            {
                button.setAttribute('style', 'background-color: #1e1f21;')
            }
        })
    }

    currentTaskFolder = 'Main';

    if (currentTaskFolder === 'Main') {
        mainFolderButton.setAttribute('style', 'background-color: black;')
    }
    console.log(`The current taskfolder has been changed to ${currentTaskFolder}`)
    let taskDetailContainer = document.querySelector('.task-detail-container');
    console.log(taskDetailContainer.className)
    domControl.clear(taskDetailContainer)
    domControl.populateDomFromLocalStorage('Main');
})
//Used to label tasks with unique id (both in dom and in taskFolder)
let uniqueId = 0;


let domControl = new DomController();

domControl.populateDomFromLocalStorage('Main');

domControl.createAddTaskFolderButton()


if (currentTaskFolder === 'Main') {
    mainFolderButton.setAttribute('style', 'background-color: black;')
}