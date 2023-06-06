import React from "react";
import { useState } from "react";
import { Task } from "../Task";

function Work() {
    const [work, setWork] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };
     //the app is ok now but b'cos the app uses taskName to delete tasks
    //if you have two tasks with the same name, if you delete one of the
    //tasks, the other is also automatically deleted. so you have to use
    //task's id instead of taskName so that the delete function
    // will use the id of the task to delete instead of the taskName which
    //is a string.
    const addTask = () => {
        const task = {
            id: work.length === 0 ? 1 : work[work.length-1].id+1,
            taskName:newTask,
            completed: false,
        };  
        setWork([...work, task]);   
      };

        const deleteTask = (id) => {
            setWork(work.filter((task) => task.id != id));
        };
        
        const completeTask = (id) => {
            setWork(
                work.map((task) => {
                    if (task.id === id) {
                        return {...task, completed: true};
                    } else {
                        return task;
                    }
                } )
            )

        }
    
     /*
 const addTask = () => {
     setTodoList([...todoList, newTask]);
    };
*/

        /*
         const deleteTask =(taskName) =>{
         const newTodoList = todoList.filter((task) => {
        if (task === taskName) {
            return false;
        } else {
            return true;
        }
            SetTodoList(newTodoList);
    };

        */
       //Can get rid of the If statement above and
        //use return task !==taskname and it will stil work as shown below
      /* 
       const deleteTask =(taskName) =>{
      const newTodoList = todoList.filter((task) => {
      return task !== taskName;
    });
     SetTodoList(newTodoList);
    };
    */

   //Can reduce the lines of code further by removing the curly brackets
       //and return function as shown below
       /*
        const deleteTask =(taskName) =>{
        const newTodoList = todoList.filter((task) => task !== taskName);
        SetTodoList(newTodoList);
    };
  */

    //Indeed you can further reduce the length of the code by 
    //replacing the newTodolist in the setTodoList function as shown
    //below with the const newToDoList right side of the equation

   /* 
    const deleteTask =(taskName) =>{
   setTodoList(todoList.filter((task) => task !== taskName));
    }; 
    */
    return (
      <div>
        <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list">
         {work.map((task) => {
            return (
               <Task 
               taskName={task.taskName}
               id={task.id}
               completed={task.completed}
               deleteTask={deleteTask}
               completeTask={completeTask}
               />
            );
          })}
        </div>
      </div>
    );
 }
  
  export default Work;
  