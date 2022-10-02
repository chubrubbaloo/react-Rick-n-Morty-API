import React from "react";

export const Pagination = ({goToNextPage, goToPrevPage}) => {
    return (
        <div>
            <button onClick={goToPrevPage}>Previous</button>
            <button onClick={goToNextPage}>Next</button>
        </div>
    )
}