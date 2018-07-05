// Action Types
export const OPERAND_CLICK = 'OPERAND_CLICK';
export const OPERATOR_CLICK = 'OPERATOR_CLICK';
export const CLEAR_CLICK = 'CLEAR_CLICK';
export const EQUALS_CLICK = 'EQUALS_CLICK';
export const DECIMAL_CLICK = 'DECIMAL_CLICK';
const operator = /[*/+-]/;
const operand = /[\.\d]/;
// Action Creator, btn is innerText of clicked button
export const btnClick = (btn) => {
  let type;

  if (btn === '.') { type = DECIMAL_CLICK; }
  else if (btn.match(operator)) { type = OPERATOR_CLICK;} 
  else if (btn.match(operand)) { type = OPERAND_CLICK; } 
  else if (btn === '=') { type = EQUALS_CLICK; }
  else { type = CLEAR_CLICK; }

  return {
    type,
    payload: btn,
  };
};
