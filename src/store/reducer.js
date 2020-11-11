import * as actionTypes from '../store/actions'


const initialState = {
    persons: []
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDED_PERSON:
            return {
                ...state,
                persons: state.persons.concat(action.payload)
            }

        case actionTypes.DELETED_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
    }
    return state
}
export default reducer;
