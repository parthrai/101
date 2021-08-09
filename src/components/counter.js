import React, { Component } from 'react'

export default class Counter extends Component{

    constructor(){
        super();
        this.state= {
            count:0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render(){

        let { count } = this.state;

        return (
            <>
                <div>
                    <h2>Counter</h2>
                    <h1>{count}</h1>

                    <div className="buttons">
                        <button onClick={this.decrementCount}> - </button>
                        <button onClick={this.incrementCount}> + </button>
                    </div>
                </div>
            </>
        )
    }
}