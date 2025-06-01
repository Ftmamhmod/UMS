import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  ip: string;
  image: string;
}
export const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    setUsers(response.data.users);
  };
  const [userId, setUserId] = useState<number | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  useEffect(() => {
    getUsers();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user: User) => {
    setShow(true);
    setUserId(user.id);
    setUserData(user);
  };
  const handleDelete = () => {
    try {
      if (userId) {
        axios.delete(`https://dummyjson.com/users/${userId}`);
      }
      handleClose();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };
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
            <th scope="col">Birth Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: User, index: number) => (
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
              <td>
                <a className="text-warning me-3 ">
                  <MdOutlineModeEdit size={25} cursor={"pointer"} />
                </a>
                <a className="text-warning ms-3 ">
                  <AiOutlineDelete
                    size={25}
                    onClick={() => handleShow(user)}
                    cursor={"pointer"}
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {userData?.firstName} {""}
          {userData?.lastName}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
