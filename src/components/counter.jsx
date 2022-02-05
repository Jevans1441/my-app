import { useState } from "react";

const Counter = () => {
    // count is a variable, setCount is a function
    const [count, setCount] = useState(0);
    const handleClick = (number) => {
        setCount(count + number);

    };





    return (
        <>
        <p>The count is currenty {count}</p>  
        <button onClick={() => handleClick(1)} className="counterButton">+</button>
        <button onClick={() => handleClick(-1)} className="counterButton">-</button>
            
        </>
    );
};

export default Counter;