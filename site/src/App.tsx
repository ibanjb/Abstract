import 'core-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/404';
import Forbidden from './pages/403';
import ServerError from './pages/500';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import configureStore from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore().store;

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/403" component={Forbidden} />
            <Route exact path="/404" component={PageNotFound} />
            <Route exact path="/500" component={ServerError} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={CreateAccount} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
