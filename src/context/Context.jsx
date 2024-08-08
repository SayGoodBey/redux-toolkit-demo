import React, { useState } from "react";
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

const Counter1 = () => {
   console.log("count1 render");

   const { count1 } = React.useContext(StateContext);
   return (
      <div>Count1: {count1}</div>
   );
};

const SetCounter1 = () => {
   console.log("SetCounter1 render");
   const { setCount1 } = React.useContext(StateContext);
   return (
      <button onClick={() => setCount1((n) => n + 1)}>setCount1</button>
   );
};


const Counter2 = () => {
   console.log("count2 render");

   const { count2 } = React.useContext(StateContext);

   return (
      <div>Count2: {count2}</div>
   );
};



const SetCounter2 = () => {
   console.log("SetCounter2 render");
   const { setCount2 } = React.useContext(StateContext);
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