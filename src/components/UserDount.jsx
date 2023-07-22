import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useFetchUserDataDoubt } from '../query/UserDoubt'
import { setUserData } from '../redux/UserDoubtSlice'


export const UserDount = () => {
    const dispatch = useDispatch()
    const query = useFetchUserDataDoubt()
    const storeUserDatatoReduxStore =()=>{

        if(query.data?.data?.data?.length>0){
            dispatch(setUserData(query.data.data))
            alert("Data Fetched")
        }
    }
    useEffect(() => {
      
        storeUserDatatoReduxStore()
        console.log("data",query.data?.data?.data)
        console.log("is loafding....",query.isLoading)
        console.log(query.error)
      
    }, [query.isLoading])
    
  return (
    <div>

    </div>
  )
}

