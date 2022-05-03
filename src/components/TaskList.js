import "./TaskList.css"
import { useSelector, useDispatch } from 'react-redux'
import {createTask} from "../reducers/tasklist/index"
import { useState } from "react"


export function TaskList() {  

  const tasks = useSelector((state)=> state.tasks.value)
  const dispatch = useDispatch()
  
  const [tarea,setTarea] = useState("")

  const listTasks = tasks.map((task,key) =>
    <li key={key}>{key+1}  {task}</li>
  );


  const counter = useSelector((state) => state.counter.value)

  return (
    <div className="TaskList">
      <h1>Tasklist</h1>
      <div className="container">
        <div className="inputTask">

          <h4>Introducir Tarea</h4>
          <input type="text" onChange={e => setTarea(e.target.value)} value={tarea} onKeyUp={(e)=>{
            if(e.key==="Enter" & tarea.length>0){
              dispatch(createTask(tarea))
              setTarea("")
            }
          }}/> 
          <button onClick={()=>{
            if(tarea.length>0){
              dispatch(createTask(tarea))
              setTarea("")
            }
            }}>
              Crear
            </button>
        </div>
        <div className="container-tasks">
          <h4>Tareas</h4>
          <ul>
            {listTasks}
          </ul>

          
        </div>
          <span>{counter > 3 ? "Mayor a 3": ""} </span>
      </div>
    </div>
  );
}
  