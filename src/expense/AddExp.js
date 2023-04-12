import React, { createContext } from "react";
import { AppContext } from "../context";
import { ListExpense } from "./ListExpense";

export const AddExp = () => {
  var user = {
    name: "samir",
    age: 20,
  };
  const test =()=>{
    alert("test")
  }

  return (
    <div>
      <AppContext.Provider value={{user,test}}>
        <ListExpense></ListExpense>

      </AppContext.Provider>
    </div>
  );
};
