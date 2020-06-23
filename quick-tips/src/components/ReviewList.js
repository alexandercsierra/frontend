import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import review from './review';
import { FetchReviews} from '../actions1';

function AllReviews(props) {
    
    
    useEffect(()=> {
        props.addReview()
    }, [])

    return(
        <div>
            {props.review.map((review) => (
                <review review={review}></review>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        review: state.Reviews,
        isFetching: state.isFetching,
        error:state.error
    }
}
export default connect(mapStateToProps, {FetchReviews})(AllReviews)