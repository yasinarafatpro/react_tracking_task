/* eslint-disable no-unused-vars */
import Task from "../Task"
const Tasks = ({tasks,onDelete,onToggole}) => {
    
    return (
        <>
            {tasks.map((task,index) => (
                <Task 
                key={index} 
                task={task} 
                onDelete={onDelete}
                onToggole={onToggole}
                />
            )
            )}
        </>
    )
}

export default Tasks
