import { useEffect, useState } from 'react'
import Kanan from './components/kanan'

let columns = [
  { id: 1, title: 'To Do', tasks: ['Task 1', 'Task 2'] },
  { id: 2, title: 'In Progress', tasks: ['Task 3', 'Task 4'] },
  { id: 3, title: 'Done', tasks: ['Task 5', 'Task 6'] },

]

function App() {
  const [coloms,setColoms] = useState(columns)

  const addTask = (columnId) => {
     const newTask = prompt('enter task name')
     if(newTask)
     {
      setColoms((prevColumns) => {
        const updatedColumns = prevColumns.map((column) => {
          if (column.id === columnId) {
            return {
              ...column,
              tasks: [...column.tasks, newTask],
            };
          }
          return column;
        });
        return updatedColumns;
      });  
     }
      
  };

  const addColumn = (inputData) => {
    const newColumn = {
      id: coloms.length + 1,
      title: inputData,
      tasks: [],
    };
    setColoms([...coloms, newColumn]);
  };


  const removeColumn = (columnId) => {
    setColoms((prevColumns) => prevColumns.filter((column) => column.id !== columnId));
  };
  
  const moveTask = (columnId, taskIndex) => {
    setColoms((prevColumns) => {
      let movedTask
      const updatedColumns = prevColumns.map((column) => {
        if (column.id === columnId) {
          const newTasks = [...column.tasks];
          movedTask = newTasks.splice(taskIndex, 1)[0];
          return {
            ...column,
            tasks: newTasks,
          };
        } 
        else if (column.id === columnId + 1) {
          return {
            ...column,
            tasks: [...column.tasks, movedTask],
          };
        }
        return column;
      });
      return updatedColumns;
    });
  
  };

  return (
    <>
       <Kanan columns={coloms} addColumn={addColumn} addTask={addTask} moveTask={moveTask} removeColumn={removeColumn}/>
    </>
  )
}

export default App



















