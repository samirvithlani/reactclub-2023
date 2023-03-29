import axios from "axios"
import { useMutation, useQuery } from "react-query"

const fetchUserData = ()=>{
    return axios.get("http://localhost:3001/user/user")
}
const addUserData = (data)=>{
    return axios.post("http://localhost:3001/user/user",data)
}
export const useAddData = () =>{

    return useMutation(addUserData,{
        
    })

}
export const useFetchData = () =>{

    return useQuery("users", fetchUserData,{
        retry: 10,
        retryDelay: 10,
        enabled: false,
        refetchOnMount:false,
        onSuccess: (data)=>{
            console.log("data...",data)
        }
        

    })
}
