import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import TodoContainer from "./components/TodoContainer"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)