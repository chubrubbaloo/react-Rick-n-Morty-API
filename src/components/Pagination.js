import React from "react";

export const Pagination = ({goToNextPage, goToPrevPage}) => {
    return (
        <div>
            {goToPrevPage && <button onClick={() => {
                window.scroll({
                    top:0,
                    left: 0,
                    behavior: 'smooth'
                })
                goToPrevPage()
            }}>Previous</button>}
            {goToNextPage && <button onClick={() => {
                window.scroll({
                    top:0,
                    left: 0,
                    behavior: 'smooth'
                })
                goToNextPage()
            }}>Next</button>}
        </div>
    )
}