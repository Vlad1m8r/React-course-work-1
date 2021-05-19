
export const ADD_DEALER_ERROR = "ADD_DEALER_ERROR"
export const ADD_DEALER_LOADING = "ADD_DEALER_LOADING"
export const ADD_DEALER_SUCCESS = "ADD_DEALER_SUCCESS"

export const DELETE_DEALER_LOADING = "DELETE_DEALER_LOADING"
export const DELETE_DEALER_ERROR = "DELETE_DEALER_ERROR"
export const DELETE_DEALER_SUCCESS = "DELETE_DEALER_SUCCESS"

export const EDIT_DEALER_LOADING = "EDIT_DEALER_LOADING"
export const EDIT_DEALER_ERROR = "EDIT_DEALER_ERROR"
export const EDIT_DEALER_SUCCESS = "EDIT_DEALER_SUCCESS"

export const FETCH_DEALER_ERROR = "FETCH_DEALER_ERROR"
export const FETCH_DEALER_SUCCESS = "FETCH_DEALER_SUCCESS"
export const FETCH_DEALER_LOADING = "FETCH_DEALER_LOADING"



const defaultState = {
    dealers: [],
    error: null,
    isLoading: false,
    sortByIdBool: true,
    dealersStatic:[]
}


export const dealerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DEALER_SUCCESS:
            return {...state, dealers: action.payload}
        case FETCH_DEALER_LOADING:
            return {...state, isLoading: action.payload}
        case FETCH_DEALER_ERROR:
            return {...state, error: action.payload}
        case ADD_DEALER_SUCCESS:
            return {...state, dealers: [...state.dealers, action.payload]}
        case ADD_DEALER_ERROR:
            return  {...state, error: action.payload}
        case EDIT_DEALER_SUCCESS:
            const updateDealers = state.dealers.filter(dealers => dealers.id !== action.payload.id)
            return {...state, dealers: [...updateDealers, action.payload]}
        case DELETE_DEALER_SUCCESS:
            const filterDealers = state.dealers.filter(dealers => dealers.id !== action.payload)
            return {...state, dealers: [...filterDealers] }
        case DELETE_DEALER_ERROR:
            return {...state, error: action.payload}
        case "СОРТИРОВКА_ПО_ID_DEALER":
            if (action.payload) {
                console.log("sorted")
                const sortedDealer = state.dealers.sort((a, b) => a.id > b.id ? 1 : -1)
                return {...state, dealers: [...sortedDealer], sortByIdBool: !action.payload}
            } else {
                const unSortedDealer = state.dealers.sort((a, b) => a.id < b.id ? 1 : -1)
                return {...state, dealers: [...unSortedDealer], sortByIdBool: !action.payload}
            }
        case "DEALER_STATISTIC":
            return {...state, dealersStatic: action.payload}
        default:
            return state
    }
}