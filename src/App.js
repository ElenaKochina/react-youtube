import React from 'react'
import TodoList from './Todo/TodoList'

function App() {

  const todos = [
    { id: 1, completed: false, title: 'Shopping'},
    { id: 2, completed: false, title: 'Gym'},
    { id: 3, completed: false, title: 'Learning Task'}
  ]

  return (
  <div className='wrapper'>
      <h1>React tutorial</h1>
      <TodoList todos={todos}/>
  </div>
  )
}

export default App;
