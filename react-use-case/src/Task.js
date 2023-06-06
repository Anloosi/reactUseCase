export const Task = (props) => {
    return (
        <div
        className="task"
        style={{backgroundColor: props.completed ? "green" : "white"}}
        >
         <h2>{props.taskName}</h2>   
         <button onClick={() => props.completeTask(props.id)}> complete</button>
         <button onClick={() => props.deleteTask(props.id)}> X </button>
        </div>
    );
}