// main component to set up routes

import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskDetail from './components/TaskDetail';
import TaskList from './components/TaskList';

// mock data
let tasks = [
    {
        id: 1, 
        title: "Complete practice exercise",
        description: "Practice: React State Management and Event Handling - 4 - Task Management"
    },
    {
        id: 2, 
        title: "Go on a run",
        description: "1.5 miles at 10min:45sec / mile speed"
    },
    {
        id: 3, 
        title: "View lecture recap",
        description: "React State Mgmt Part 5: Routing and Dynamic Path Parameters"
    },
]

function App() {

  return (
      <BrowserRouter>
        <TaskList tasks={tasks}/>
        <Routes>
          {/* colon indicates dynamic routing */}
          <Route path="/tasks/:id" element={<TaskDetail tasks={tasks} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
