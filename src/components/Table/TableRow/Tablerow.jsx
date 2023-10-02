import { Link } from "react-router-dom";
import "./TableRow.css";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
// eslint-disable-next-line react/prop-types
const TableRow = ({ SrNo, fullName, email, gender, contact, userId,   setUserData}) => {
  const handleDelete = () =>{
   axios.delete(`${BASE_URL}/users/deleteUser/${userId}`).then(() => {
    axios.get(`${BASE_URL}/users/getAllUsers`).then((res) => {
      setUserData(res.data);
    });
   })
  .catch((err) => alert(err));
  };

      return(
      <tr className="tableRow">
      <td>{SrNo}</td>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{gender ? "Male" : " Female"}</td>
      <td>{contact}</td>
      <td>
      <Link to={`/editUser/${userId}`} className="tableBtn editBtn">Edit</Link>
      </td>
      <td>
      <button className="tableBtn deleteBtn" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
    )
};

export default TableRow;