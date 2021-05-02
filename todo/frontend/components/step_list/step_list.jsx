import React from 'react';
import StepListItemContainer from './step_list_item_container';

export const StepList = (props) => {
    debugger
    return (
        <div>
            <ul>
                {props.steps.map(step => {
                        debugger
                        return (
                        <StepListItemContainer
                        step={step}
                        key={step.id}
                        />
                    )}
                )}
            </ul>
            
        </div>
    )
}