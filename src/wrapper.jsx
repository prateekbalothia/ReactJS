import { Children } from "react";

function Wrapper({children}){
    return (
        <div style={{color:"blue", border:"2px solid red"}}>
            {children}
        </div>
    )
}

export default Wrapper;