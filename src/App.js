import React, { Component } from 'react'
import { connect } from 'react-redux'

 class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.data}
        <button onClick={this.props.plus}>+</button>
        <button onClick={this.props.substract}>-</button>
        <button onClick={this.props.reset}>reset</button>
      </div>
    )
  }
}

const mapStateToProps = state =>{
    return{
        data: state.count
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        plus : ()=>dispatch({type:"INCREASE"}),
        substract : ()=>dispatch({type:"DECREASE"}),
        reset : ()=>dispatch({type:"RESET"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)