import React, {Component} from 'react'

class FilterString extends Component{
    
    constructor(){
        super()
        this.state = {
            unFilteredArray: ['Brian', 'Brittney', 'Evan', 'Kristin', 'Toni', 'Emma', 'Robert', 'Julie'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(e){
        this.setState({userInput: e})
    }

    filterNames(userInput){
        let names = this.state.unFilteredArray
        let filtered = []

        for(let i = 0; i < names.length; i++){
            if(names[i].includes(userInput)){
                filtered.push(names[i])
            }
        }

        this.setState({filteredArray: filtered})
    }

    render(){
        return(
            <div className= 'puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className= 'puzzleText'> Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input 
                    className= 'inputLine' 
                    onChange={(e) => this.handleChange(e.target.value)}/>
                <button 
                    className= 'confirmationButton' 
                    onClick={(e) => this.filterNames(this.state.userInput)}>Filter</button>
                <span className= 'resultsBox filterStringRB' > Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString