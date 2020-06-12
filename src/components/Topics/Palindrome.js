import React, {Component} from 'react'

class Palindrome extends Component{
    constructor(){
        super()
        this.state={
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(e){
        this.setState({userInput: e})
    }

    checkPalindrome(userInput){
        let forwards = userInput.toLowerCase();
        let backwards = userInput.toLowerCase();
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if ( forwards === backwards ) {
            this.setState({ palindrome: `${userInput} is a palindrome!` });
        } else {
             this.setState({ palindrome: `${userInput} is not a palindrome.` });
        }
    }
    
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input 
                    className='inputLine'
                    onChange={(e) => this.handleChange(e.target.value)}></input>
                <button 
                    className='confirmationButton'
                    onClick={(e) => this.checkPalindrome(this.state.userInput)}>Check</button>
                <span className='resultsBox'>{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome