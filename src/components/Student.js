import React from "react";
import { useForm } from "react-hook-form";

export const Student = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
        mode:"onChange"
    }
  );
  console.log("errors....",errors);
// console.log("errors....",errors.fname.message);
  const submit = (data) =>{
    console.log("data....",data);
    console.log("errors....",errors);
  }
  const validationSchema = {
    fname :{
        required:{
            value:true,
            message:"First Name is required"
        },
        minLength:{
            value:3,
            message:"First Name should be minimum 3 characters"
        }
    },
    age:{
        required:{
            value:true,
            message:"Age is required"
        },
        min:{
            value:18,
            message:"Age should be minimum 18"
        }
    },
    phone:{
        required:{
            value:true,
            message:"Phone is required"
        },
        pattern:{
            value:/^[6-9]{1}[0-9]{9}$/, 
            message:"Phone should be 10 digits"
        }
    }

  };

  return <div>
        <form onSubmit={handleSubmit(submit)}>
        <div>
            <label>First Name</label>
            <input type="text" {...register("fname",validationSchema.fname)}/>
            {
                 <span>{errors?.fname?.message}</span>
            }
        </div>
        <div>
            <label>Enter age</label>
            <input type="text" {...register("age",validationSchema.age)}/>
            {
                <span>
                    {
                        errors?.age?.message
                    }
                </span>
            }
        </div>
        <div>
            <label>Enter Phone</label>
            <input type="text" {...register("phone",validationSchema.phone)}/>
            {
                <span>
                    {
                        errors?.phone?.message
                    }
                    </span>
            }
        </div>
        <div>
            <input type="submit" value="ADD"></input>
        </div>
        </form>

  </div>;
};
