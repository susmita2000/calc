import React, { Component } from 'react';
import './calc.css';
import ResultComponent from './ResultComponent';
import KeyPadComponent from './KeypadComponent';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "",
            result2: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
         else if(button === "^"){
            this.setState({
            result: this.state.result + button ,
             result2 : this.state.result2 + "**"
         })
        }
          else if(button === "π"){
            this.setState({
            result: this.state.result + button ,
             result2 : this.state.result2 + "3.14159"
         })
        }
         else if(button === "e"){
            this.setState({
            result: this.state.result + button ,
             result2 : this.state.result2 + "2.71828"
         })
        }
        else {
            this.setState({
                result: this.state.result + button,
                result2: this.state.result2 + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result2) ),
                result2: (eval(this.state.result2) ) 
            })
        } catch (e) {
            this.setState({
                result: "error",
                result2: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: "",
            result2: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1),
            result2: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1 className="head1">My Calculator</h1>
                    <div className="calculator-body2">
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;