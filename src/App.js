import { useState, useEffect } from 'react';
import './App.css';
import { ShowTasks } from './component/showTasks';
import { AddTasks } from './component/addTasks';
import { Pages } from './component/pages';



function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("TaskData");
    if (saved) {
      const saved = localStorage.getItem("TaskData");
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    } else {
      return []
    }
  }

  )


  useEffect(() => {
    localStorage.setItem('TaskData', JSON.stringify(tasks))
  }, [tasks])

  const addTest = (data) => {
    tasks.push({ ...data, id: Date.now() })
    setTasks([...tasks])
    console.log(tasks);

  }
  const deleteById = (id) => {
    setTasks([...tasks.filter(e => e.id != id)])
  }

  return (
    <div className='dv1' style={{ display: 'block', justifyContent: "center", alignItems: "center", width: "1000px", }} >

      <Pages />
      <h1 style={{ display: "flex", justifyContent: "center" }}>Tasks</h1>
      <div className='ddd1'>
        <div className='ddd1'>
          <ShowTasks tasks={tasks} deleteById={deleteById} />
        </div>
        <hr />

        <div className='ddd1'>
          <AddTasks addTest={addTest} />
        </div>
      </div>



    </div >
  );
}

export default App;
