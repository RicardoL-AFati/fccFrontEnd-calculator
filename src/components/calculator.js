import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { btnClick } from '../actions/index';

class Calculator extends Component {
    // Adding click event handler to all button divs, once component has rendered
    componentDidMount() {
      [...document.querySelectorAll('.operand, .operator, .equals, .clear')]
        .forEach(btn => btn.addEventListener('click', this.handleClick.bind(this)));
    }
    // Passes clicked btn to action creator
    handleClick(event) {
      this.props.btnClick(event.target.innerText);
    }
    // CSS grid for layout, Display for result is taken off state
    render() {
        return (
        <div>
            <h4>React-Redux Calculator</h4>
            <div className='wrapper'>
                <div id='display'>{this.props.result}</div>
                <div className='clear' id='clear'><button>AC</button></div>
                <div className='operator' id='divide'><button>/</button></div>
                <div className='operator' id='multiply'><button>*</button></div>
                <div className='operator' id='add'><button>+</button></div>
                <div className='operator' id='subtract'><button>-</button></div>
                <div className='equals' id='equals'><button>=</button></div>
                <div className='operand'id='decimal'><button>.</button></div>
                <div className='operand'id='seven'><button>7</button></div>
                <div className='operand'id='eight'><button>8</button></div>
                <div className='operand'id='nine'><button>9</button></div>
                <div className='operand'id='four'><button>4</button></div>
                <div className='operand'id='five'><button>5</button></div>
                <div className='operand'id='six'><button>6</button></div>
                <div className='operand'id='one'><button>1</button></div>
                <div className='operand'id='two'><button>2</button></div>
                <div className='operand'id='three'><button>3</button></div>
                <div className='operand'id='zero'><button>0</button></div>
            </div>
            <p>Coded by <a href='https://github.com/RicardoL-AFati/fccFrontEnd-calculator'>Ricardo Ledesma</a></p>
        </div>
        );
    }
}

const mapStateToProps = ({ result }) => ({ result });
const mapDispatchToProps = dispath => bindActionCreators({ btnClick }, dispath); 
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);