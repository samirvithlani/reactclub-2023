import React, { useEffect } from 'react'
import { useFetchData } from './userService'

export const UserApi = () => {

    const {data,isLoading,error,refetch} = useFetchData()
   
    useEffect(() => {
      
        console.log("data...",data)
        console.log("isLoading...",isLoading)
        console.log("error...",error)
    
      
    }, [isLoading])
    


  return (
    <div>
        <button onClick={()=>refetch()}>Fetch Data</button>
    </div>
  )
}
