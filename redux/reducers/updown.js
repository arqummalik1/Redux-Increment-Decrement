const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
switch(action.type){
    case 'Increment' : return state + action.payload;
    case 'Decrement' : return state - 1;
    case 'Multiply' : return state * action.payload;
    case 'Reset' : return initialState;
    default : return state;
}
}

export default changeTheNumber;