import React from "react";
import {GiPreviousButton, GiNextButton} from "react-icons/gi";

export const Pagination = ({goToNextPage, goToPrevPage, goToPage, pages}) => {

    const pageButtons = []
    for (let i = 1; i <= pages; i++) {
        pageButtons.push(<button className='page-flipper'  key={i} onClick={() => {
            window.scroll({top:0,left:0})
            goToPage(i)
        }}>{i}</button>)
    }

    return (
        <div id='page-flipper-container'>
            {goToPrevPage && <button className='page-flipper' onClick={() => {
                window.scroll({ top: 0,left: 0})
                goToPrevPage()
            }}><GiPreviousButton id='left-arrow'/> Prev </button>}
            {pageButtons}
            {goToNextPage && <button className='page-flipper' onClick={() => {
                window.scroll({top: 0,left: 0,})
                goToNextPage()
            }}>Next <GiNextButton id='right-arrow'/></button>}
        </div>
    )
}