import React from 'react'
import AddTodo from '../containers/AddTodo'
import FetchedTodos from '../containers/FetchedTodos'
import Footer from './Footer'

const App = () => (
    <div>
        <AddTodo />
        <FetchedTodos />
        {/* <VisibleTodoList /> */}
        <Footer />
    </div>
)

export default App