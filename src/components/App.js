import React from 'react'
import './App.css';
import AddTodo from '../containers/AddTodo'
import FetchedTodos from '../containers/FetchedTodos'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const App = () => (
    <div className="App">
        <AddTodo />
        <FetchedTodos />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App
