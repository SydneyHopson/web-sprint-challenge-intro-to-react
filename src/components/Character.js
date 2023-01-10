import React from "react";





const Character = ({character}) => { 
    
    // console.log(character)
    
    
    return (
        <div className="Swc">
            {/* <h1 className="Header">Characters</h1> */}
            <h3>{character.name}</h3>
        </div>
    )
}
export default Character