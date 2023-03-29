import React, { useEffect } from 'react'
import { useAddData } from './userService'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {


    var navigate = useNavigate()
    const mutation = useAddData()

    const submit = ()=>{

            var data = {
                name:"samir",
                email:"samir@gmail.com",
                age:12,
                password:"samir123",
                isActive:true
            }
            mutation.mutate(data)
            toast.success('🦄 Wow so easy!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

                setTimeout(() => {
                    navigate('/')
                }, 2000);    
                


    }
    useEffect(() => {
        console.log("ideal...",mutation.isIdle)
        console.log("loading...",mutation.isLoading)
        console.log("success...",mutation.isSuccess)
        console.log("error...",mutation.isError)
        console.log("data...",mutation.data)

    
    }, [mutation.isLoading])
    

  return (
    <div>
        <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
            <button onClick={submit}>Add User</button>
    </div>
  )
}
