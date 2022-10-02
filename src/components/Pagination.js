import React from "react";

export const Pagination = ({goToNextPage}) => {
    return (
        <div>
            <button onClick={goToNextPage}>Next</button>
        </div>
    )
}