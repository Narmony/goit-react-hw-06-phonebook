import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
// import types from './contacts-types';
//before toolkit
// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       //   const checkedName = state
//       //     .map(contact => contact.name)
//       //     .includes(payload.name);

//       //   if (checkedName) {
//       //     alert(`${payload.name} is already in contacts`);
//       //     return;
//       //   }
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

//with toolkit

const checkName = (state, { payload }) => {
  const checkedName = state.map(contact => contact.name).includes(payload.name);
  if (checkedName) {
    alert(`${payload.name} is already in contacts`);
    return;
  }
  return [...state, payload];
};

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => checkName(state, { payload }),
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
