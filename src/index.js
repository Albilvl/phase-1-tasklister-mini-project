document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDescription = document.querySelector(`#new-task-description`)
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    toDoTask(newTaskDescription.value)
    form.reset()
  })
  /* defined the form and the task description 
  Added an eventlistener that takes in sumit and function: takes in e, 
  first prevent the default
  then has a function inside that does something to the value 
  and finally resets to clear the box*/
});

function toDoTask(task){
  const listItems = document .createElement(`li`)
  listItems.textContent = `${task}`
  const btn = document.createElement('button')
  btn.textContent = " x"
  btn.addEventListener('click', (e)=>{
    e.target.parentNode.remove()
  })
  document.querySelector('#tasks').appendChild(listItems).appendChild(btn)
}