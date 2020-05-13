import React, {Component} from 'react'

class FilterString extends Component{
    
    constructor(){
        super()
        this.state = {
            unFilteredArray: ['Brian', 'Brittney', 'Evan', 'Kristin', 'Toni', 'Emma', 'Robert', 'Julie'],
            userInput: '',
            filteredArray: ''
        }
    }
    render(){
        return(
            <div className= 'puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className= 'puzzleText'></span>
                <input className= 'inputLine' />
                <button className= 'confirmationButton' ></button>
                <span className= 'resultsBox filterStringRB' ></span>
            </div>
        )
    }
}

export default FilterString