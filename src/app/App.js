import React, { Component } from 'react';


import Tasks from './components/Tasks'

class App extends Component {

    render(){
        const { store } = this.props
        return(
                <Tasks />
        )
    }
}

export default App;