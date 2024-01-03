import { createAction, createReducer } from '@reduxjs/toolkit';

const inputText = createAction('input/text');
const inputCheckbox = createAction('input/checkbox');

const initialState = {};

const inputHandleSlide = createReducer(initialState, (builder) => {
  builder
    .addCase(inputText, (state, action) => {})
    .addCase(inputCheckbox, (state, action) => {});
});

export default inputHandleSlide;
