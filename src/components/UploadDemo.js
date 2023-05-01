import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

export const UploadDemo = () => {
    const {register, handleSubmit} = useForm();
    const submit = async(data)=>{

            //formData
            var formData =  new FormData();
            formData.append("file",data.file[0]);
            formData.append("name","Ram");

            console.log(data.file[0]);
            const res = await axios.post("http://localhost:3001/upload/upload",formData);
            console.log(res);


    }
  return (
    <div>
        <h1>Upload Demo</h1>
        <form onSubmit={handleSubmit(submit)} encType="multipart/form-data">
            <input type="file" name="file" {...register("file")}/>
            <input type="submit" value="Upload" />
        </form>
    </div>
  )
}
