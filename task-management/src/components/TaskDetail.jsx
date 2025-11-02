// displays details of a specific task

import { useParams } from "react-router-dom";

const TaskDetail = ({ tasks }) => {

    // grab ID from URL
    const { id } = useParams();

    // return task that matches ID
    const fetchTask = tasks.find(task => task.id == id);

    const handleIds = (id) => {
        if (id > tasks.length || id == 0) {
            return <h3>Invalid task, please try again.</h3>;
        } else if (!id) {
            return <h3>Unknown task, please try again.</h3>;
        } else if (id) {
            return (
                <div>
                    <h3 className="task-title">Task: {fetchTask.title}</h3>
                    <p className="task-description"><strong>Description</strong>: <br /><br />{fetchTask.description}</p>
                </div>
            )
        }
    }

    // render task details
    return (
        <div className="task-details-container">
            {handleIds(id)}
        </div>
    );
};

export default TaskDetail;
