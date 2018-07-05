import { OPERAND_CLICK, OPERATOR_CLICK, CLEAR_CLICK, EQUALS_CLICK, DECIMAL_CLICK } from '../actions/index';
// Regex saved to var for greater readability
const endsWithOperator = /[*/+-]$/;
const digitsOperatordigits = /^\d+[*/+-]\d+$/;

export default function (state = '0', action) {
  switch (action.type) {
    // If click was '=' -> evaluate current state, return result
    case EQUALS_CLICK:
      if (/\d[*/+-]\d/.test(state)) { return parseFloat(eval(state).toFixed(4)); }
      return state;
    // If [*/+-] was clicked
    case OPERATOR_CLICK:
      // Sets character limit for calc, further characters are not added
      if (state.length > 15) { return state; }
      else if (/^[*/+-]$/.test(state) && /[/*]/.test(action.payload)) {
        return state;
      // If state ends with operator - replace it
      } else if (endsWithOperator.test(state)) {
        return `${state.slice(0, -1)}${action.payload}`;
      // If two sets of digits with operator in between - add operator to end of state
      } else if (digitsOperatordigits.test(state)) { 
        return `${state}${action.payload}`;
      // If starting a new calculation - only allows [+-] to be added
      } else if (state === '0') { 
        if (/[-+]/.test(action.payload)) { return action.payload; }
        return state;
      }
      // default is to add operator to end of state
      return `${state}${action.payload}`;
    case OPERAND_CLICK:
      if (state.length > 15) { return state; }
      // if new calculation - replace 0 with clicked operand
      else if (state === '0') { return action.payload; }
      // ensures no digit starts with zero or double zeroes
      else if (/[*/+-]0$/.test(state) && action.payload === '0') { return state; }
      else if (/[*/+-]$/.test(state) && action.payload === '0') { return state; }
      // default is to add operand to end of state 
      return `${state}${action.payload}`;
    case DECIMAL_CLICK:
      if (state.length > 15) { return state; }
      // ensure decimal is not added twice - including in one digit (48.7.)
      if (/\.$/.test(state) || /\d\.$/.test(state) || /\d+\.\d+$/.test(state)) {
        return state;
      // if state ends with digit - add decimal to end of state
      } else if (/\d$/.test(state)) { 
        return `${state}${action.payload}`;
      // if state end with operator - add 0 and decimal to end of state
      } else if (endsWithOperator.test(state)) { 
        return `${state}0${action.payload}`;
      }
      // default is to not add to state
      return state;
    case CLEAR_CLICK:
      // when cleared - sets display to 0
      return '0';
    default:
      return state;
  }
}
