/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks';
import AddTask from './component/AddTask';
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Dr.Appoinment',
        day: '5 feb 2021 3.45pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Metting at office',
        day: '7 feb 2021 7.45pm',
        reminder: true,
    }, {
        id: 3,
        text: 'Shopping ',
        day: '8 feb 2021 8.45pm',
        reminder: false,
    },
])
const toggleReminder=(id)=>{
  console.log('Toggole Reminder',id)
  setTasks(tasks.map((task)=>
  task.id===id ? {...task,reminder:!task.reminder} :task
  ))
}
//addTask
const addTask=(task)=>{
  const id=Math.floor(Math.random()*99999) + 9
  const newTask={ id,...task}
  console.log(task,id)
  setTasks([...tasks,newTask])
}
//delete task
const deleteTask =(id)=>{
  console.log('delete task',id)
  setTasks(tasks.filter((task)=>task.id!==id))
}
  return (
    <div className='container'>
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length>0 ?(<Tasks 
      tasks={tasks} 
      onDelete={deleteTask} 
      onToggole={toggleReminder}
      />) :(
        'No task to show'
      )}
    </div>
  );
}
export default App;
