import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';

import Layout from './components/Layout.jsx';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { lightBlue900, yellow50, yellow600 } from 'material-ui/styles/colors';

import './style.css'
import store from './store';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
	fontFamily: 'Roboto, sans-serif',
  palette: {
    // primary1Color: lightBlue900,
    // accentColor: yellow50
  },
});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={Layout} >
          {/* <IndexRoute component={} /> */}
        </Route>
        {/* <Route path="*" component={} /> */}
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
