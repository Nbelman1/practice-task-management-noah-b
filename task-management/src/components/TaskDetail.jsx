// displays details of a specific task

import { useParams } from "react-router-dom";

const TaskDetail = ({ tasks }) => {

    // grab ID from URL
    const { id } = useParams();

    // return task that matches ID
    const fetchTask = tasks.find(task => task.id == id);

    // TODO: logic to handle no matching ID error gracefully

    // render task details
    return (
        <div>
            <h3>Task: {fetchTask.title}</h3>
            <p><strong>Description</strong>: {fetchTask.description}</p>
        </div>
    );
};

export default TaskDetail;
