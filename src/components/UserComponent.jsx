import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useFetchUser } from '../query/UserApiTest'
import { setUser } from '../redux/UserSlice'

export const UserComponent = () => {
    const res = useFetchUser()
    const dispatch = useDispatch()
    useEffect(() => {
    
        console.log(res.data.data.data)
        dispatch(setUser(res?.data?.data?.data))

    }, [res.isLoading])
    
  return (
    <div>
      <h1>ok...</h1>
    </div>
  )
}

