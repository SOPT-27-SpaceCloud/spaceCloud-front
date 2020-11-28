import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/common/header/Header';
import MainPage from './pages/main/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={Header}/>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path="/*">404 NOT FOUND</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
