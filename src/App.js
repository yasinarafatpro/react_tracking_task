/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks';
import AddTask from './component/AddTask';
function App() {
  const[showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks=async()=>{
      const taskFromServer=await fatchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  },[])
  //fetch data from json server
  const fatchTasks=async()=>{
    const res=await fetch('http://localhost:5000/tasks')
    const data=await res.json()
    return data
  }
  const fetchTask=async(id)=>{
    const res=await fetch(`http://localhost:5000/tasks/${id}`)
    const data=await res.json()
    return data
  }
  //Toggle Reminder
const toggleReminder=async (id)=>{
  const taskToggle=await fetchTask(id)
  console.log(taskToggle)
  
  const updateTask={...taskToggle,reminder: !taskToggle.reminder}
  const res=await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(updateTask)
  })
  const data=await res.json()
  setTasks(tasks.map((task)=>
  task.id===id ? {...task,reminder:data.reminder} :task
  ))
}
//addTask
const addTask=async(task)=>{
  const res=await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(task),
  })
  const data=await res.json()
  setTasks([...tasks,data])
}

//delete task
const deleteTask =async(id)=>{
  const deletedTask= await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
  console.log(deletedTask)
  setTasks(tasks.filter((task)=>task.id!==id))
}
  return (
    <div className='container'>
      <Header 
      onAdd={()=>setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
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
