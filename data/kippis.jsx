import React, {useState} from "react"

function Kippis() {
    const [showMessage, setShowMessage] = useState(false) 

    const puppy = {
        name: "Kippis",
        breed: "Spitz",
        color: "Black",
        age: 11,
        isCute: true,
      };

      const handleClick =() => {
        setShowMessage(true);
      }
      const handleClose =()=>{
        setShowMessage(false)
      }

    return(

       <div>
        <button onClick={handleClick}>Visa meddelande</button>
        {showMessage && (
            <div className="overlay"> 
            <div className ="modal">
                <span className="close" onClick={handleClose}>&times;</span>
                <p>{puppy.name} är {puppy.age}</p></div></div>
        )}
         </div>
        
    )
}

export default Kippis