import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    setUsers(response.data.users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="bg-body-tertiary p-3">
      <div className=" d-flex justify-content-between p-3 ">
        <h3>Users List</h3>
        <button type="button" className="btn btn-login text-white ps-4 pe-4">
          ADD NEW USER
        </button>
      </div>
      <hr className="m-4" />
      <table className="table table-light table-hover p-5 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Enroll Number</th>
            <th scope="col">Date of admission</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: any, index: number) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  src={user.image}
                  alt="user"
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{user?.firstName + " " + user.lastName}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{user?.birthDate}</td>
              <td>{user?.ip}</td>
              <td>
                <a className="text-warning me-3">
                  <MdOutlineModeEdit />
                </a>
                <a className="text-warning ms-3">
                  <AiOutlineDelete />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
