import React from "react";
import {GiPreviousButton, GiNextButton} from "react-icons/gi";

export const Pagination = ({goToNextPage, goToPrevPage}) => {
    return (
        <div id='page-flipper-container'>
            {goToPrevPage && <button className='page-flipper' onClick={() => {
                window.scroll()
                goToPrevPage()
            }}> <GiPreviousButton id='left-arrow'/> Prev </button>}
            {goToNextPage && <button className='page-flipper' onClick={() => {
                window.scroll({
                    top:0,
                    left: 0,
                })
                goToNextPage()
            }}>Next  <GiNextButton id='right-arrow'/> </button>}
        </div>
    )
}