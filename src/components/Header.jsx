import React from 'react'

function Header (props){
    return(
        <div className="pipezLogo">
            <img src={props.logo} className="App-logo-sm" alt="logo" /><h1>Pipez Puzzle</h1>
        </div>
    )
}

export default Header