import React from 'react'

const Task = (props) => {
  return (
        <div style={{backgroundColor: props.completed ? "green" : "white"}}>
            <strong>{props.listName}</strong>
            <button onClick={() => props.onComplete(props.id)}>Complete</button>
            <button onClick={() => props.deletelist(props.id)}> x </button>
        </div>
  )
}

export default Task
