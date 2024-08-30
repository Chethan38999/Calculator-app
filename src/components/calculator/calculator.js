import React, { useReducer, useRef, useEffect, useCallback, useMemo, createContext } from 'react';
import '../calculator/calculator.css';
import CalculatorButtons from '../CalculatorButtons/CalculatorButtons';
import { Container, Row, Col, Form } from 'react-bootstrap';

export const CalculatorContext = createContext();

const initialState = {
  displayValue: '0',
  firstOperand: null,
  operation: null,
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DIGIT':
      return {
        ...state,
        displayValue: state.displayValue === '0' ? action.digit : state.displayValue + action.digit,
      };
    case 'CLEAR':
      return initialState;
    case 'SET_OPERATION':
      return {
        ...state,
        firstOperand: state.displayValue,
        operation: action.operation,
        displayValue: '0',
      };
    case 'EVALUATE':
      if (state.operation && state.firstOperand !== null) {
        const result = eval(`${state.firstOperand} ${state.operation} ${state.displayValue}`);
        return {
          ...state,
          displayValue: String(result),
          firstOperand: null,
          operation: null,
        };
      }
      return state;
    default:
      return state;
  }
};

const Calculator = () => {
  const [{ displayValue }, dispatch] = useReducer(calculatorReducer, initialState);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleDigitPress = useCallback((digit) => {
    dispatch({ type: 'ADD_DIGIT', digit });
  }, []);

  const memoizedDisplay = useMemo(() => displayValue, [displayValue]);

  return (
    <CalculatorContext.Provider value={{ handleDigitPress, dispatch }}>
      <Container className="d-flex justify-content-center align-items-center vh-100" id='container'>
        <Row>
          <Col xs={12}>
            <Form.Control 
              ref={inputRef} 
              type="text" 
              value={memoizedDisplay} 
              readOnly 
              className="text-right mb-4 bg-dark text-white"
              style={{ fontSize: '2rem' }}
            />
            <CalculatorButtons />
          </Col>
        </Row>
      </Container>
    </CalculatorContext.Provider>
  );
};

export default Calculator;
