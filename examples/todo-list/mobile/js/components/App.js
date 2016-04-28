/**
 * Created by xavier on 4/26/16.
 */

'use strict';

import React from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

export default class App extends React.Component {
    render() {
        return <Router>
            <Scene key="root">
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="register" component={Register} title="Register"/>
                <Scene key="home" component={Home}/>
            </Scene>
        </Router>
    }
}


