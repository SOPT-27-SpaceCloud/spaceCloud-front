import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../src/components/common/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={Header}/>
        <Switch>
          <Route exact path='/'>Main page</Route>
          <Route path="/*">404 NOT FOUND</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
