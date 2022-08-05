




export default function Main(props) {

    return (
        <div className="main" onClick={props.holdDice}>
            
                <div className="rando">
                    
                    <div className={props.isHeld ? "dicecol" : "dicegreen"} >{props.value}</div>
                    
               
                 
                </div>
            </div>
        
    )
}