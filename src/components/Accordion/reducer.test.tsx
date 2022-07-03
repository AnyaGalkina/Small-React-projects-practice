import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducerUncontrolledAccordion";

test("reducer should change value to opposite", () => {
//    state
    let state: StateType={ collapsed: true};
//    action
    let stateChanged = reducer(state, {type: TOGGLE_COLLAPSED });

//    expect
    expect(stateChanged.collapsed).toBe(false);
})

test("reducer should throw error", () => {
    let state: StateType={ collapsed: true};
    expect(() => {
        reducer(state, {type: "FAKE_TYPE" })
    }).toThrowError()
})