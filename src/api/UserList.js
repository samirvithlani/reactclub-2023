import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserList = () => {
  const [users, setusers] = useState([]);
  const [loader, setloader] = useState(true)

  const getAlluser = async () => {
    
    axios
      .get("https://reqres.in/api/users?delay=3")
      .then((res) => {
        setloader(false)
        setusers(res.data.data);
      })
      .catch((err) => {});
      
  };

  const deleteUser = async (id) => {
    axios
      .delete(`http://localhost:3001/user/user/${id}`)
      .then((res) => {
        if (res.status === 204) {
          //alert("User Deleted");
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
          getAlluser();
        }
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getAlluser();
  }, []);

  return (
    <div>
      {
        loader ? <h1>loading....</h1> : null
      }
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
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <a
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
