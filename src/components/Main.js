




export default function Main(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
    }

    return (
        <div className="main" onClick={props.holdDice}y>
            
                <div className="rando">
                    
                    <div className="dicecol" style={styles}>{props.value}</div>
                    
               
                 
                </div>
            </div>
        
    )
}