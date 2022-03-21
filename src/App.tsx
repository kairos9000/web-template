import { useState } from "react";

export function App() {
    const [count, setCount] = useState(1);

    return (
        <>
            <h1>Hello World</h1>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </>
    );
}
