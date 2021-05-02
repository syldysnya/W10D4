import React from 'react';

export const StepListItem = (props) => {
    return (
        <div>
            <h1>{props.step.title}</h1>
            <p>{props.step.body}</p>
        </div>
    )
}