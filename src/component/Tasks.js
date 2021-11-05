/* eslint-disable no-unused-vars */
import Task from "../Task"
const Tasks = ({tasks,onDelete,onToggole}) => {
    
    return (
        <>
            {tasks.map((task) => (
                <Task 
                key={task.id} 
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
