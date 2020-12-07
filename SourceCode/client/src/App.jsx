import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/Home"
import DataProk from "./routes/DataProk"
import Update from "./routes/Update"
import { ContextProkProvider } from './context/ContextProk'


function App() {
    return (
       <ContextProkProvider>
<div className="container">
            <Router>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/proker/:id/update" component={Update}/>
                <Route exact path="/proker/:id" component={DataProk}/>
                </Switch>
            </Router>
        </div>

       </ContextProkProvider>
            
      
        
    )
}

export default App

