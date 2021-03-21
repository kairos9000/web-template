import { useState } from "react";
import { Number } from "./Number";

export const Demo = () => {
    const [number, setNumber] = useState(0);
    const [defined, setDefined] = useState(true);

    return (
        <div>
            <Number unit="$">{defined ? number : null}</Number>
            <button onClick={() => setNumber(number - 20)}>Remove 20</button>
            <button onClick={() => setNumber(number + 20)}>Add 20</button>
            <button onClick={() => setDefined(!defined)}>Make {defined ? "Undefined" : "Defined"}</button>
        </div>
    );
};
