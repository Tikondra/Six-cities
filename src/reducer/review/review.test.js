import {reducer, ActionType, ActionCreator, isDisabledSubmit} from "./review";

const initialState = {
  btnIsDisabled: true,
  formIsDisabled: false,
  rating: 0,
  comment: ``,
  error: false,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Reducer should ChangeRating`, function () {
  expect(reducer(initialState, {
    type: ActionType.CHANGE_RATING,
    payload: 2,
  })).toEqual({
    btnIsDisabled: isDisabledSubmit(2, ``),
    formIsDisabled: false,
    rating: 2,
    comment: ``,
    error: false,
  });
});

it(`Reducer should ChangeComment`, function () {
  expect(reducer(initialState, {
    type: ActionType.CHANGE_COMMENT,
    payload: `It is a comment!`,
  })).toEqual({
    btnIsDisabled: isDisabledSubmit(0, `It is a comment!`),
    formIsDisabled: false,
    rating: 0,
    comment: `It is a comment!`,
    error: false,
  });
});

it(`Reducer should BlockedForm`, function () {
  expect(reducer(initialState, {
    type: ActionType.BLOCKED_FORM,
    payload: true,
  })).toEqual({
    btnIsDisabled: true,
    formIsDisabled: true,
    rating: 0,
    comment: ``,
    error: false,
  });
});

it(`Reducer should ResetForm`, function () {
  expect(reducer(initialState, {
    type: ActionType.RESET_FORM,
    payload: initialState,
  })).toEqual(initialState);
});

it(`Reducer should ShowError`, function () {
  expect(reducer(initialState, {
    type: ActionType.SHOW_ERROR,
    payload: true,
  })).toEqual({
    btnIsDisabled: true,
    formIsDisabled: false,
    rating: 0,
    comment: ``,
    error: true,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creators ChangeRating work correctly`, function () {
    expect(ActionCreator.changeRating(2)).toEqual({
      type: ActionType.CHANGE_RATING,
      payload: 2,
    });
  });

  it(`Action creators ChangeComment work correctly`, function () {
    expect(ActionCreator.changeComment(`It is a comment!`)).toEqual({
      type: ActionType.CHANGE_COMMENT,
      payload: `It is a comment!`,
    });
  });

  it(`Action creators BlockedForm work correctly`, function () {
    expect(ActionCreator.blockedForm(true)).toEqual({
      type: ActionType.BLOCKED_FORM,
      payload: true,
    });
  });

  it(`Action creators ResetForm work correctly`, function () {
    expect(ActionCreator.resetForm()).toEqual({
      type: ActionType.RESET_FORM,
      payload: initialState,
    });
  });

  it(`Action creators ShowError work correctly`, function () {
    expect(ActionCreator.showError(true)).toEqual({
      type: ActionType.SHOW_ERROR,
      payload: true,
    });
  });
});
