import React, { useState, memo } from "react";
const StateContext = React.createContext(null);

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

const WithContext = (Component, context, v) => {
    const MemoComponent = memo(Component);
    // eslint-disable-next-line react/display-name
    return () => {
        const value = React.useContext(context);
        const props = { [v]: value[v] }
        return <MemoComponent {...props}></MemoComponent>
    }
}


const Counter1 = ({ count1 }) => {
    console.log("count1 render");

    return (
        <div>Count1: {count1}</div>
    );
};
const WidthCounter1 = WithContext(Counter1, StateContext, "count1");

const SetCounter1 = ({ setCount1 }) => {
    console.log("SetCounter1 render");
    return (
        <button onClick={() => setCount1((n) => n + 1)}>setCount1</button>
    );
};

const WidthSetCounter1 = WithContext(SetCounter1, StateContext, "setCount1");


const Counter2 = ({ count2 }) => {
    console.log("count2 render");


    return (
        <div>Count2: {count2}</div>
    );
};

const WidthCounter2 = WithContext(Counter2, StateContext, "count2");

const SetCounter2 = ({ setCount2 }) => {
    console.log("SetCounter2 render");
    return (
        <button onClick={() => setCount2((n) => n + 1)}>setCount2</button>
    );
};

const WidthSetCounter2 = WithContext(SetCounter2, StateContext, "setCount2");

const Context = () => {
    return (
        <StateProvider>
            <WidthCounter1 />
            <WidthSetCounter1 />
            <WidthCounter2 />
            <WidthSetCounter2 />
        </StateProvider>
    );
};

export default Context;