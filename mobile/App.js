import React from 'react';
import { UIManager } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
