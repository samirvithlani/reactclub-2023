import axios from "axios"
import { useQuery } from "react-query"

const fetchData = ()=>{
    return axios.get("https://node5.onrender.com/user/user")
}

export const useFetchUserDataDoubt = ()=>{
    return  useQuery("user",fetchData)
}