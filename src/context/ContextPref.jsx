import React, { useMemo, useReducer } from "react";
const ApiContext = React.createContext(null);
const Count1Context = React.createContext(null);
const Count2Context = React.createContext(null);

const StateProvider = ({ children }) => {
    console.log("StateProvider render");


    const initialState = { count1: 1, count2: 1 };

    const reducer = (state, action) => {
        switch (action.type) {
            case "setCount1":
                return { ...state, count1: state.count1 + 1 }
            case "setCount2":
                return { ...state, count2: state.count2 + action.payload }
            default:
                return state;
        }


    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const api = useMemo(() => {
        const setCount1 = () => {
            dispatch({ type: 'setCount1' });
        }
        const setCount2 = (payload) => {
            dispatch({ type: 'setCount2', payload });
        }
        return {
            setCount1,
            setCount2
        }
    }, [])

    return (
        <ApiContext.Provider value={api}>
            <Count1Context.Provider value={state.count1}>
                <Count2Context.Provider value={state.count2}>
                    {children}
                </Count2Context.Provider>
            </Count1Context.Provider>
        </ApiContext.Provider>

    );

}

const Counter1 = () => {
    console.log("count1 render");

    const count1 = React.useContext(Count1Context);
    return (
        <div>Count1: {count1}</div>
    );
};

const SetCounter1 = () => {
    console.log("SetCounter1 render");
    const { setCount1 } = React.useContext(ApiContext);
    return (
        <button onClick={() => setCount1()}>setCount1</button>
    );
};


const Counter2 = () => {
    console.log("count2 render");

    const count2 = React.useContext(Count2Context);

    return (
        <div>Count2: {count2}</div>
    );
};



const SetCounter2 = () => {
    console.log("SetCounter2 render");
    const { setCount2 } = React.useContext(ApiContext);
    return (
        <button onClick={() => setCount2(3)}>setCount2</button>
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