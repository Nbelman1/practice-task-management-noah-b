// displays details of a specific task

import { useParams } from "react-router-dom";

const TaskDetail = ({ tasks }) => {

    // grab ID from URL
    const { id } = useParams();

    // return task that matches ID
    const fetchTask = tasks.find(task => task.id == id);

    const handleIds = (id) => {
        if (id > tasks.length || id == 0) {
            return "Invalid task, please try again.";
        } else if (!id) {
            return "Unknown task, please try again.";
        } else if (id) {
            return (
                <div>
                    <h3>{fetchTask.title}</h3>
                    <p><strong>Description</strong>: <br /><br />{fetchTask.description}</p>
                </div>
            )
        }
    }

    // render task details
    return (
        <div>
            <h3>Task: {handleIds(id)}</h3>
        </div>
    );
};

export default TaskDetail;
