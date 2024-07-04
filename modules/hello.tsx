import React, { useState, useEffect } from "react";


const Hello = () => {
    
    
    const [ randomNum, setRandomNum ] = useState<number | number>(0)
    
    const yourNumber = () => (randomNum === 0) ? 'Click to Start' : `Your Number is ${randomNum}`;
    
    const handleClick = () => {
        const newNum: number = Math.floor(Math.random() * 10) + 1;
        setRandomNum(newNum);
        if (randomNum === 0) {
            return( 'Click to Start' );
        }
        else {    
            console.log('your number is:', newNum);
        }
    }
    
    const isWinner = (newNum: number) => {
        if (newNum === 10) {
            
            document.getElementById('catimg')?.classList.add('animation');
            return( 'You Win!' );

        } 
        else if (randomNum === 0){
            return( '' );
        }
        else {
           
            document.getElementById('catimg')?.classList.remove('animation');
            return('You Lose!');

        }
    }


    return (
       <>
            <button onClick={handleClick} id="button" className="center" >Generate Random Number</button>
            {/* <h2>your number is {randomNum}</h2> */}
            <h2>{yourNumber()}</h2>
            <h2>{isWinner(randomNum)}</h2>
       </> 
    )

}

export default Hello;