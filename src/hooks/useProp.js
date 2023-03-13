import { useState } from "react";

export default function useProp(param){

    var [error, seterror] = useState({})
    console.log(param);
    function toUpperCase(text){

        if(typeof text !== "string"){
            error = {
                message: "Invalid Data Type",
                type: "Invalid Data Type"
            }

            return;
            
        }
        //seterror({})
        return text.toUpperCase();
    }
    //seterror(error)

    return {
        toUpperCase,error
    }
}