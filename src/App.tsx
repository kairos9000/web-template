import { Add } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

export function App() {
    const [count, setCount] = useState(1);

    return (
        <>
            <Typography variant="h1">Hello World</Typography>
            <Button variant="contained" startIcon={<Add />} onClick={() => setCount(count + 1)}>
                {count}
            </Button>
        </>
    );
}
