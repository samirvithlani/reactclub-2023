import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const LoginUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginUser = async (data) => {
    try{
    const res = await axios.post("http://localhost:4000/user/user/login", data);
    console.log(res.data);
        localStorage.setItem("id", res.data.data._id);

    }catch(err){
        alert("Invalid Credentials");
        console.log(err);
    }
  };
  return (
    <div>
      <h1>Login User</h1>
      <form onSubmit={handleSubmit(loginUser)}>
        <input
          type="text"
          placeholder="Enter Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>Email is required</p>}
        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Password is required</p>}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
