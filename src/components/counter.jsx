import { useState } from "react";

const Counter = () => {
    // count is a variable, setCount is a function
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <>
        <p>The count is currenty {count}</p>  
        <button onClick={handleClick}>+</button>
        </>
    );
};

export default Counter;