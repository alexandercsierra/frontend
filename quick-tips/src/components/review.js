import React from 'react';

const review = (props) => {
    return (
        <div>
            {props.review.date}
            {props.review.name}
            {props.review.review}
        </div>
    )
}

export default review;