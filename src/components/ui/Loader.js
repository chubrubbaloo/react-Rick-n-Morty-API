import React from "react";
export const Loader = ({loading}) => {



    const loadingScreen = () => {
        if (loading) return <h2 style={{textAlign:"center", fontSize:'100px'}}>Loading</h2>
    }

    return (
        <div>
            {loadingScreen()}
        </div>
    )
}