/**
 * Created by xavier on 4/26/16.
 */
import { Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';

const RouterWithRedux = connect()(Router);
import reducers from './reducers';
// other imports...

// create store...
const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);


class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    // your scenes here
                </RouterWithRedux>
            </Provider>
        );
    }
}

export default App;