import React, { useState } from 'react'
import '../App.css';

const kanan = ({columns, addColumn, addTask, moveTask,removeColumn}) => {
    const [inputData, setInputData] = useState('')

    const addTasks = (colId) =>{
        addTask(colId)
    }

    const addColom =()=>{
        addColumn(inputData);
    }

    const moveTasks = (colId,index)=>{
        moveTask(colId,index)
    }

    const removeCol = (colId) => {
        removeColumn(colId)
    }
  return (
    <div>
        <div className='board'>
            {columns.map((column) => (
            <div key={column.id} className="column">
            <div className="header">
                {column.title}
                <span onClick={() => addTasks(column.id)}>+</span>
            </div>
            <div className="tasks">
            {column.tasks.length === 0 && (
              <button onClick={() => removeCol(column.id)}>Remove</button>
            )}
                {column.tasks.map((task, index) => (
                <div key={index} className="task">
                    {task}
                    <button onClick={() => moveTasks(column.id, index)}>Move</button>
                </div>
                ))}
            </div>
            </div>
        ))}
        
        </div>
        <input type='text'value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
        <button onClick={addColom}>
            Add Column
        </button>
   </div>
  )
}

export default kanan