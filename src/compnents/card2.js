import React from "react"
import "./profile.css"
function Card2(props){
    return(
    
        <div className="Card">
          
            <div className="CardPargraph">
            <h4 className="Date">{props.h4}</h4>
            <button className="Imporvement">fix</button>
            <h6>{props.h6}</h6>
            <img src= {props.img} class="cardimg"/>
                <p className="description">{props.p} </p>
                
            </div>
            <button className="Download">Download</button>
        </div>
    )
}
export default Card2