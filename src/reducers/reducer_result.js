import { OPERAND_CLICK, OPERATOR_CLICK, CLEAR_CLICK, EQUALS_CLICK, DECIMAL_CLICK } from '../actions/index';

const endsWithOperator = /[*/+-]$/;
const digitsOperatordigits = /^\d+[*/+-]\d+$/;
const onlyOperator = /^[*/+-]$/;

export default function (state = '0', action) {
  switch (action.type) {
    case EQUALS_CLICK:
      if (/\d[*/+-]\d/.test(state)) { return parseFloat(eval(state).toFixed(4)); }
      return state;
    case OPERATOR_CLICK:
      if (state.length > 15) { return state; }
      else if (onlyOperator.test(state) && /[/*]/.test(action.payload)) {
        return state;
      } else if (endsWithOperator.test(state)) {
        return `${state.slice(0, -1)}${action.payload}`;
      } else if (digitsOperatordigits.test(state)) { 
        return `${state}${action.payload}`;
      } else if (state === '0') { 
        if (/[-+]/.test(action.payload)) { return action.payload; }
        return state;
      }
      return `${state}${action.payload}`;
    case OPERAND_CLICK:
      if (state.length > 15) { return state; }
      else if (state === '0') { return action.payload; }
      else if (/[*/+-]0$/.test(state) && action.payload === '0') { return state; }
      else if (/[*/+-]$/.test(state) && action.payload === '0') { return state; } 
      return `${state}${action.payload}`;
    case DECIMAL_CLICK:
      if (state.length > 15) { return state; }
      if (/\.$/.test(state) || /\d\.$/.test(state) || /\d+\.\d+$/.test(state)) {
        return state;
      } else if (/\d$/.test(state)) { 
        return `${state}${action.payload}`;
      } else if (endsWithOperator.test(state)) { 
        return `${state}0${action.payload}`;
      }
      return state;
    case CLEAR_CLICK:
      return '0';
    default:
      return state;
  }
}
