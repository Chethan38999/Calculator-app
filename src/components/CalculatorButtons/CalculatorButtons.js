import React, { useContext } from 'react';
import { CalculatorContext } from '../calculator/calculator';
import { Button, Row, Col } from 'react-bootstrap';
import './CalculatorButtons.css'

const CalculatorButtons = () => {
  const { handleDigitPress, dispatch } = useContext(CalculatorContext);

  const buttonStyle = {
    backgroundColor: '#00224D',
    width: '5em',
    height: '3em',
    fontSize: '1.5rem',
    margin: '0.1em',
    border: '2px solid white',
    borderRadius: '8px', 
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.5)', 
    transition: 'transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out', 
  };
  
  const hoverButtonStyle = {
    transform: 'translateY(-2px)', 
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.15)', 
  };

  const operationButtonStyle = {
    ...buttonStyle,
    fontSize:'1.5em',
    backgroundColor: '#4d4d4d',
    borderColor: '#333',
    border: '2px solid white'
  };

  const equalButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4d4d4d',
    borderColor: '#333',
  };

  return (
    <>
      <Row>
        <Col xs={3}><Button style={{ ...buttonStyle, backgroundColor: '#d9534f' }} onClick={() => dispatch({ type: 'CLEAR' })} id='Clear-btn'>C</Button></Col>
        <Col xs={3}><Button style={operationButtonStyle} onClick={() => dispatch({ type: 'SET_OPERATION', operation: '%' })}>%</Button></Col>
        <Col xs={3}><Button style={operationButtonStyle} onClick={() => dispatch({ type: 'SET_OPERATION', operation: '+' })}>+</Button></Col>
        <Col xs={3}><Button style={operationButtonStyle} onClick={() => dispatch({ type: 'SET_OPERATION', operation: '*' })}>×</Button></Col>
      </Row>
      <Row>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('7')}>7</Button></Col>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('8')}>8</Button></Col>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('9')}>9</Button></Col>
        <Col xs={3}><Button style={operationButtonStyle} onClick={() => dispatch({ type: 'SET_OPERATION', operation: '-' })}>−</Button></Col>
      </Row>
      <Row>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('4')}>4</Button></Col>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('5')}>5</Button></Col>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('6')}>6</Button></Col>
        <Col xs={3}><Button style={equalButtonStyle} onClick={() => dispatch({ type: 'EVALUATE' })}>=</Button></Col>
      </Row>
      <Row>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('1')}>1</Button></Col>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('2')}>2</Button></Col>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('3')}>3</Button></Col>
      </Row>
      <Row>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('0')}>0</Button></Col>
        <Col xs={3}><Button style={buttonStyle} onClick={() => handleDigitPress('.')}>.</Button></Col>
      </Row>
    </>
  );
};

export default CalculatorButtons;
