import React, { useState } from "react";


const Hello = () => {
    
    const [ randomNum, setRandomNum ] = useState<number>()
    // const printNum = () => {return(x)}
    const handleClick = () => {
        const newNum: number = Math.floor(Math.random() * 10) + 1;
        setRandomNum(newNum)
        console.log('your number is:', newNum)
    }
    
    const isWinner = (newNum: number) => (newNum === 10) ? 'You Win!' : 'You Lose!'
        

        



    return (
       <>
            <button onClick={handleClick}>Generate Random Number</button>
            <div>your number is {randomNum}</div>
            <div>{isWinner(randomNum)}</div>
       </> 
    )

}
export default Hello;