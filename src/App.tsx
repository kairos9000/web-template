import { Button } from "@mui/material";
import { useState } from "react";

export function App() {
    const [count, setCount] = useState(1);

    return (
        <>
            <h1>Hello World</h1>
            <Button variant="outlined" onClick={() => setCount(count + 1)}>
                {count}
            </Button>
        </>
    );
}
