import React, { useContext } from 'react'
import { AppContext } from '../context'
import { Detail } from './Detail'

export const ListExpense = () => {
const {user,test} = useContext(AppContext)
console.log(user)


  return (
    <div>
        <button onClick={test}>.....</button>
        {user?.name}
        {user?.age}
        <Detail/>
    </div>
  )
}
