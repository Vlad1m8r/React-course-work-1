import {
    ADD_DEALER_ERROR,
    ADD_DEALER_LOADING,
    ADD_DEALER_SUCCESS,
    DELETE_DEALER_LOADING,
    DELETE_DEALER_ERROR,
    DELETE_DEALER_SUCCESS,
    EDIT_DEALER_LOADING,
    EDIT_DEALER_ERROR,
    EDIT_DEALER_SUCCESS,
    FETCH_DEALER_ERROR,
    FETCH_DEALER_SUCCESS,
    FETCH_DEALER_LOADING,
} from "../reducers/dealerReducer"

import axios from "axios";

import {history} from "../index";

const DEALER_REST_API_URL = 'http://localhost:8080/api/dealer';

//CREAT------------------------------------------------------------------
export const createDealerSuccess = (data) => {
    return {
        type: ADD_DEALER_SUCCESS,
        payload: data,
    }
}

export const createDealerError = (data) => {
    // debugger
    return {
        type: ADD_DEALER_ERROR,
        payload: data,
    }
}

export const createDealer = (dealer) => {

    debugger
    if (dealer.id) {
        const data = {
            id: dealer.id,
            phone: dealer.phone,
            address: dealer.address,
            city: dealer.city,
        }
        return (dispatch => {
            dispatch(editDealer(data))
        })
    } else {
        const data = {
            id: dealer.id,
            phone: dealer.phone,
            address: dealer.address,
            city: dealer.city,
        }

        return (dispatch) => {
            return axios.post(DEALER_REST_API_URL, data)
                .then(response => {

                    dispatch(createDealerSuccess(response.data))
                    history.push('/')

                }).catch(error => {
                    console.log(error)
                    const errorPayload = {}
                    errorPayload['message'] = error.response?.data
                    errorPayload['status'] = error.response?.status
                    dispatch(createDealerError(errorPayload))
                })
        }
    }

}

//EDIT-------------------------------------------------------------------
export const editDealerError = (data) => {
    return {
        type: EDIT_DEALER_ERROR,
        payload: data,
    }
}

export const editDealerSuccess = (data) => {
    return {
        type: EDIT_DEALER_SUCCESS,
        payload: data,
    }

}

export const editDealer = (data) => {
    const id = data.id
    return (dispatch) => {
        return axios.put(`${DEALER_REST_API_URL}`, data)
            .then(() => {
                history.push('/')
                return axios.get(`${DEALER_REST_API_URL}/${id}`)
                    .then(response => {
                        dispatch(editDealerSuccess(response.data))
                        // history.push('/')
                    }).catch(error => {
                        // debugger
                        dispatch(editDealerError(error))
                    })
            }).catch(error => {
                // debugger
                dispatch(editDealerError(error))
            })
    }
}


//DELETE-----------------------------------------------------------------
export const deleteDealersSuccess = (data) => {
    return {
        type: DELETE_DEALER_SUCCESS,
        payload: data,
    }
}
export const deleteDealersError = (data) => {
    debugger
    return {
        type: DELETE_DEALER_ERROR,
        payload: data,
    }
}

export const deleteDealers = (id) => {
    return (dispatch) => {
        return axios.delete(`${DEALER_REST_API_URL}/${id}`)
            .then(() => {
                dispatch(deleteDealersSuccess(id))
            })
            .catch(error => {
                dispatch(deleteDealersError(error))

            })
    }
}



//FETCH------------------------------------------------------------------
export const fetchDealersSuccess = (data) => {
    return {
        type: FETCH_DEALER_SUCCESS,
        payload: data,
    }
}

export const fetchDealersLoading = (data) => {
    return {
        type: FETCH_DEALER_LOADING,
        payload: data,
    }
}

export const fetchDealersError = (data) => {
    return {
        type: FETCH_DEALER_ERROR,
        payload: data,
    }
}

export const fetchDealers = () => {
    return (dispatch) => {
        dispatch(fetchDealersLoading(true))
        return axios.get(DEALER_REST_API_URL)
            .then(response => {
                const data = response.data;
                dispatch(fetchDealersSuccess(data))
                dispatch(fetchDealersLoading(false))
            }).catch(error => {
                dispatch(fetchDealersError(error))
                dispatch(fetchDealersLoading(false))
            })
    }
}


//FETCH--STATISTIC----------------------------------------------------------------
export const fetchDealersStaticSuccess = (data) => {
    return {
        type: "DEALER_STATISTIC",
        payload: data,
    }
}

export const fetchDealersStatistic = () => {
    return (dispatch) => {
        return axios.get(`${DEALER_REST_API_URL}/static`)
            .then(response => {
                const data = response.data;
                dispatch(fetchDealersStaticSuccess(data))
            }).catch(error => {
                debugger
                dispatch(fetchDealersError(error))
            })
    }
}