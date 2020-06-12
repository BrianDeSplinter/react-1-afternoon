import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    
    handleFirst(e){
        this.setState({number1: Number(e)})
    }

    handleSecond(e){
        this.setState({number2: Number(e)})
    }

    sum(){
        let sum = this.state.number1 + this.state.number2
        this.setState({sum: sum})
    }

    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input 
                    className='inputLine'
                    onChange={(e) => this.handleFirst(e.target.value)}></input>
                <input 
                    className='inputLine'
                    onChange={(e) => this.handleSecond(e.target.value)}></input>
                <button 
                    className='confirmationButton'
                    onClick={(e) => this.sum()}>Add</button>
                <span className='resultsBox'>The sum is {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum