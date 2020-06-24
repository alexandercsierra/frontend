import { START_FETCHING, 
        FETCH_SUCCESS,
        FETCH_FAILURE,
        ADD_REVIEW,
        REVIEW_ADDED,
        REVIEW_FAIL

} from '../../actions1';

const initialState = {
    Reviews: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
    case START_FETCHING:
    return {
        ...state,
        isFetching: true,
        error: ''
    };

    case FETCH_SUCCESS: 
        return {
            ...state,
            isFetching: false,
            error: '',
            Reivews: action.payload
        };
        
    case FETCH_FAILURE: 
    return {
       ...state,
       isFetching: false,
       error: action.payload,
    };
    case ADD_REVIEW:
    return{
        ...state,
        isFetching: false,
        error: ''
    };
    case REVIEW_ADDED:
    return {
        ...state,
        isFetching: false,
        error: '',
        Reviews: action.payload,
    };
    case REVIEW_FAIL:
    return{
        ...state, 
        isFetching: false,
        error: action.payload,
    }
    default:
    return state;
}
}

export default reducer;