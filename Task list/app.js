//ui variables
//input form:
const form = document.querySelector('#task-form')
//ul:
const taskList = document.querySelector('.collection')
//Clear Tasks btn
const clearBtn = document.querySelector('.clear-tasks')
// filter input
const filter = document.querySelector('#filter')
//task input:
const taskInput = document.querySelector('#task')


// ----------- load event listeners -------------
loadEventListeners()

function loadEventListeners() {

  document.addEventListener('DOMContentLoaded', getTasksFromLS)
  //add task
  form.addEventListener('submit', addTask)
  //remove task
  taskList.addEventListener('click', removeTask)
  //clear all tasks on CLEAR TASKS btn
  clearBtn.addEventListener('click', clearTasks)
  //filter tasks:
  filter.addEventListener('keyup', filterTasks)
}

//---------- geting the tasks from local storage ------
function getTasksFromLS() {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(task => {
    const li = document.createElement('li')
    li.className = 'collection-item'
    li.appendChild(document.createTextNode(task))

    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>'

    li.appendChild(link)
    taskList.appendChild(li)
  })
}

//------------------- add task ---------------------------
function addTask(e) {

  if (taskInput.value === '') {
    alert('Add task')
  }
  //creating li element
  const li = document.createElement('li')
  li.className = 'collection-item'
  li.appendChild(document.createTextNode(taskInput.value))
  //creating link element
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content'
  link.innerHTML = '<i class="fa fa-remove"></i>'
  li.appendChild(link)
  taskList.appendChild(li)

  //store task in local storage
  storeInLoalStorage(taskInput.value)

  taskInput.value = ''
  e.preventDefault()
}

function storeInLoalStorage(task) {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

//--------------- remove task ------------------
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove()
    }
  }
  // remove task from local storage
  removeTaskFromLS(e.target.parentElement.parentElement)
}

function removeTaskFromLS(taskItem) {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

//-------------- clear all tasks on a button -------------------
function clearTasks(e) {
  //taskList.innerHTML = ''
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
  //clear all tasks from local storage
  clearAllTasksFromLS()
}

function clearAllTasksFromLS() {
  localStorage.clear()
}

//------------- filtering tasks --------------------
function filterTasks(e) {
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.collection-item')
    .forEach(list => {
      const item = list.firstChild.textContent

      if (item.toLowerCase().indexOf(text) !== -1) {
        list.style.display = 'block'
      } else {
        list.style.display = 'none'
      }
    })
}




