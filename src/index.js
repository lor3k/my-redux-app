import React from 'react'
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { changeText } from './state/text'
import { store } from './store'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <input
                    onChange={event => this.setState({text: event.target.value})}
                />
                <button
                onClick={event => this.props.changeText(this.state.text)}
                >
                    Change text!
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.text.text
})

const mapDispatchToProps = dispatch => ({
    changeText: content => dispatch(changeText(content))
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
    < Provider store={store} >
        <ConnectedApp />
    </Provider >,
    document.getElementById('root')
)
