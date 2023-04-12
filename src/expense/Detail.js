import React, { useContext } from 'react'
import { AppContext } from '../context'

export const Detail = () => {
    const {user,id} = useContext(AppContext)
    
    
  return (
    <div>Detail

        <h2>{user?.name}</h2>
        <h4>{id}</h4>
    </div>
  )
}
