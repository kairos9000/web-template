import { useState } from "react";

export function App() {
    const [count, setCount] = useState(1);

    function handleClick() {
        setCount((count) => count + 1);
    }

    return (
        <>
            <h1>Hello World</h1>
            <button onClick={handleClick}>{count}</button>
        </>
    );
}
