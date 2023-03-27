import axios from "axios"
import { useQuery } from "react-query"

const fetchUserData = ()=>{
    return axios.get("http://localhost:3001/user/user")
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
