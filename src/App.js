import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Socket from './digitain/Socket';
const webSocket = new Socket();


class App extends Component {
    componentDidMount(){
        console.log(this.refs.test.innerHTML);
        console.log(webSocket);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code ref="test">src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;