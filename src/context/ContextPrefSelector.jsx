import { useState } from "react";
import { createContext, useContextSelector } from 'use-context-selector';

const StateContext = createContext(null);

const StateProvider = ({ children }) => {
    console.log("StateProvider render");

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    return (
        <StateContext.Provider
            value={{ count1, setCount1, count2, setCount2 }}>
            {children}
        </StateContext.Provider>
    );
};

const Counter1 = () => {
    console.log("count1 render");

    const count1 = useContextSelector(StateContext, v => v.count1);
    return (
        <div>Count1: {count1}</div>
    );
};

const SetCounter1 = () => {
    console.log("SetCounter1 render");
    const setCount1 = useContextSelector(StateContext, v => v.setCount1);
    return (
        <button onClick={() => setCount1((n) => n + 1)}>setCount1</button>
    );
};


const Counter2 = () => {
    console.log("count2 render");

    const count2 = useContextSelector(StateContext, v => v.count2);

    return (
        <div>Count2: {count2}</div>
    );
};



const SetCounter2 = () => {
    console.log("SetCounter2 render");
    const setCount2 = useContextSelector(StateContext, v => v.setCount2);
    return (
        <button onClick={() => setCount2((n) => n + 1)}>setCount2</button>
    );
};

const Context = () => {
    return (
        <StateProvider>
            <Counter1 />
            <SetCounter1 />
            <Counter2 />
            <SetCounter2 />
        </StateProvider>
    );
};

export default Context;