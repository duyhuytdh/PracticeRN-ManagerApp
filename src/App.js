import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import firebase from '@firebase/app'
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyCxbyts3cH7FVp174OBDCiMMsvdtmSpzZU",
            authDomain: "manager-a83d7.firebaseapp.com",
            databaseURL: "https://manager-a83d7.firebaseio.com",
            projectId: "manager-a83d7",
            storageBucket: "manager-a83d7.appspot.com",
            messagingSenderId: "649352421192"
          };
          firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers)}>
               <LoginForm/>
            </Provider>
        )
    }
}

export default App;
