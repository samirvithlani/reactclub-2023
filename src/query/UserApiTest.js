import axios from "axios"
import { useQuery } from "react-query"

const getUserData = ()=>{

    return axios.get("/user/user")
}

export const useFetchUser = ()=>{

    return useQuery("user",getUserData,{

    })
}