const initialState = {
    wishlist: []
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD_CARD':

            return {
                wishlist: [...state.wishlist, action.payload]
            }

        case 'DELETE_CARD':

            return {
                wishlist: [...state.wishlist, action.payload]
            }

        case 'EMPTY_LIST':

            return {
                wishlist: [...state.wishlist,
                action.payload]
            }

        default:
            return state;
    }
}
