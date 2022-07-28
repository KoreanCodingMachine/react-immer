import { createAction, handleActions } from 'react-redux';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// const increase = () => ({
//   type: INCREASE,
// });

export const increase = () => createAction(INCREASE);

// const decrease = () => ({
//   type: DECREASE,
// });

export const decrease = () => createAction(DECREASE);

const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
