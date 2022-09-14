import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cadastros from './pages/Cadastros'

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Home/>
                    </Route>
                    <Route path='/cadastros'>
                        <Cadastros/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App