import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

export const UpdateUser = () => {
  var location = useLocation();
  console.log(location.state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await axios.get(
        "http://localhost:3001/user/user/640416cf5e47c09a41e77ced"
      );
      return {
        name: res.data.data.name,
        email: res.data.data.email,
      };
    },
  });
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div>
        {
            location?.state?.user?.name
        }
      <h1>update user</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")}></input>
        </div>
        <div>
          <input type="submit" value="Update"></input>
        </div>
      </form>
    </div>
  );
};
