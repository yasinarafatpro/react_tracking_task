/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks';
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
const deleteTask =(id)=>{
  console.log('delete',id)
  setTasks(tasks.filter((task)=>task.id!==id))
}
  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}
export default App;
