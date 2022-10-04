import React from "react";

export const Pagination = ({goToNextPage, goToPrevPage}) => {
    return (
        <div>
            {goToPrevPage && <button onClick={() => {
                window.top()
                goToPrevPage()
            }}>Previous</button>}
            {goToNextPage && <button onClick={() => {
                window.scroll({
                    top:0,
                    left: 0,
                })
                goToNextPage()
            }}>Next</button>}
        </div>
    )
}