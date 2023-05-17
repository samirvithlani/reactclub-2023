import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const DynamicForm = () => {


    const {register, handleSubmit} = useForm()
    const [form, setForm] = React.useState([])
    const getForm = async() => {

        const res = await axios.get('http://localhost:3001/form')
        console.log(res.data)
        setForm(res.data)
    }
    useEffect(() => {
      getForm()
    
    }, [])

    const submit = (data)=>
    {
        console.log(data)
    }
    
  return (
    <div>
        <h1>Dynamic Form</h1>
        <form onSubmit={handleSubmit(submit)}>
            
            {
                form.map((f)=>{
                    return(<div>
                        <label>{f.fieldName}</label>
                        <input type={f.fieldType} name={f.name} {...register(f?.fieldName)} value={f?.value}  />
                    </div>)
                })
            }
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}
