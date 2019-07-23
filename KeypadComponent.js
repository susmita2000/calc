import React, {Component} from 'react';
import './calc.css';
import { Button } from 'reactstrap';
class KeyPadComponent extends Component {

    render() {
        return (
            <center><div className="Button">
                <Button name="(" onClick={e => this.props.onClick(e.target.name)}>(</Button>
                <Button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</Button>
                <Button name=")" onClick={e => this.props.onClick(e.target.name)}>)</Button>
                <Button name="C" onClick={e => this.props.onClick(e.target.name)}>C</Button>
                <Button name="1" className="num" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                <Button name="2" className="num" onClick={e => this.props.onClick(e.target.name)}>2</Button>

               <Button name="3" className="num" onClick={e => this.props.onClick(e.target.name)}>3</Button>
               <Button name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button>
               <Button name="4" className="num" onClick={e => this.props.onClick(e.target.name)}>4</Button>
               <Button name="5" className="num" onClick={e => this.props.onClick(e.target.name)}>5</Button>

               <Button name="6" className="num" onClick={e => this.props.onClick(e.target.name)}>6</Button>
               <Button name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button>
               <Button name="7" className="num" onClick={e => this.props.onClick(e.target.name)}>7</Button>
               <Button name="8" className="num" onClick={e => this.props.onClick(e.target.name)}>8</Button>
               <Button name="9" className="num" onClick={e => this.props.onClick(e.target.name)}>9</Button>
               <Button name="*" onClick={e => this.props.onClick(e.target.name)}>x</Button>
               <Button name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
               <Button name="0" className="num" onClick={e => this.props.onClick(e.target.name)}>0</Button>
               <Button name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
               <Button name="/" onClick={e => this.props.onClick(e.target.name)}>/</Button>
               <Button name="%" onClick={e => this.props.onClick(e.target.name)}>%</Button>
                <Button name="π" onClick={e => this.props.onClick(e.target.name)}>π</Button>
                <Button name="^" onClick={e => this.props.onClick(e.target.name)}>^</Button>
                <Button name="e" onClick={e => this.props.onClick(e.target.name)}>e</Button>
            </div></center>
        );
    }
}


export default KeyPadComponent;