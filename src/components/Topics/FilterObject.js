import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super()
        this.state = {
            unFilteredArray: [
                {
                    name: 'Brian',
                    title: 'Boss',
                    age: 28
                },
                {
                    name: 'Brittney',
                    relation: 'Wife',
                    hairColor: 'red'
                },
                {
                    name: 'Evan',
                    relation: 'Brother',
                    isDumb: true
                }],
            userInput: '',
            filteredArray: []
        }
    }

    render(){
        return(
            <div className= 'puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className= 'puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange= {(e) => this.handleChange(e.target.value)} />
                <button className= 'confirmationButton' onClick= {() => this.filterArray(this.state.userInput)} >Filter</button>
                <span className= 'resultsBox filterObjectRB'> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)} </span>
            </div>
        )
    }

    handleChange(val){
        this.setState({userInput: val})
    }
    
    filterArray(input){
        let arr = this.state.unFilteredArray
        let filterArr = []

        for(let i = 0; i < arr.length; i++){
            if(arr[i].hasOwnProperty(input)){
                filterArr.push(arr[i])
            }
        }

        this.setState({filteredArray: filterArr})

    }
}

export default FilterObject