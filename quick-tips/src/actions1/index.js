import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_REVIEW = 'ADD_REVIEW';
export const REVIEW_ADDED = 'REVIEW_ADDED';
export const REVIEW_FAIL = 'REVIEW_FAIL';

export const FetchReviews = () => (dispatch) => {
    dispatch({type:START_FETCHING})
    axios.get('fakeURL')
    .then((res) => dispatch({
     type: 'FETCH_SUCCESS', payload:res.data
    }))
    .catch((err)=> dispatch({
        type:FETCH_FAILURE,
        payload:err.response
    }))
}

export const addReview = (review) => (dispatch) => {
    dispatch({type: ADD_REVIEW})
    axios.post('tempURL', review)
    .then((res)=> {
        dispatch({
            type: REVIEW_ADDED, payload: res.data
        })
    })
    .catch((error)=> {
        dispatch({type: REVIEW_FAIL, payload: error.response})
    })
}

