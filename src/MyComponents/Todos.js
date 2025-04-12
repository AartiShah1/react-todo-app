import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  };

  const headingStyle = {
    color: '#343a40',
    fontWeight: 'bold'
  };

  const itemWrapperStyle = {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    marginBottom: '15px'
  };

  const hrStyle = {
    marginTop: '15px',
    borderTop: '1px solid #dee2e6'
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 className="text-center my-4" style={headingStyle}>Todo List</h2>

      {props.todos.length === 0 ? (
        <p className="text-center text-muted">No todos to display</p>
      ) : (
        props.todos.map((todo, index) => (
          <div key={todo.sno} style={itemWrapperStyle}>
            <TodoItem todo={todo} onDelete={props.onDelete} />
            {index !== props.todos.length - 1 && <hr style={hrStyle} />}
          </div>
        ))
      )}
    </div>
  )
}
