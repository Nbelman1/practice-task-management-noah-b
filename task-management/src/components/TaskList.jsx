// displays a list of tasks

import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
    
    const renderTasks = tasks.map((task) => 
        <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
        </li>
    );
    
    // render task links
    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {renderTasks}
            </ul>
        </div>
    );
};

export default TaskList;
