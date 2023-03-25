import './App.css';
import React from 'react';
import {connect} from 'react-redux';
class App extends React.Component {
    render() {
        return (
            <div className="App">
                {this.props.data}
                <button onClick={() => this.props.plus({type: 'INCREASE'})}>+</button>
                <button onClick={() => this.props.substract({type: 'DECREASE'})}>-</button>
                <button onClick={() => this.props.reset({type: 'RESET'})}>reset</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        data: state.count

    }
}

const mapDispatchToProps = dispatch => {
    return{
        plus : action => dispatch(action),
        substract: action => dispatch(action),
        reset : action => dispatch(action)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
