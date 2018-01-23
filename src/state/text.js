const CHANGE_TEXT = 'text/CHANGE_TEXT'

export const changeText = text => ({
    type: CHANGE_TEXT,
    text
})

const initialState = {
    text: 'Tekst który będziemy zmieniać inputem'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}