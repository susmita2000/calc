
import React, {Component} from 'react';
import './calc.css';
class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
           <center> <div className="result">
                <div className="res">{result}</div><br/>
            </div></center>
    )
        ;
    }
}


export default ResultComponent;